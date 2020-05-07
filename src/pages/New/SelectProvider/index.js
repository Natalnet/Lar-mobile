import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import api from '../../../services/api';

import Background from '../../../components/Background';
import Material from '../Material';

import { Container, Title, List, Input, Pagination } from './styles';

function SelectProvider({ isFocused, navigation }) {
  const [itens, setItens] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [page, setPage] = useState(1);
  const [maxPagination, setMaxPagination] = useState('');

  useEffect(() => {
    async function loadItens() {
      const response = await api.get(
        `/invetory?page=${page}${name ? '&name=' + name : ''}${
          location ? '&location=' + location : ''
        }`
      );
      setItens(response.data);
    }
    async function loadNumberPages() {
      const maxPage = await api.get(
        `/invetory?${location ? 'location=' + location : ''}${
          name ? '&name=' + name : ''
        }`
      );

      setMaxPagination(1 + parseInt(maxPage.data.length / 10));
    }

    if (isFocused) {
      loadNumberPages();
      loadItens();
    }
  }, [page, name, location, maxPagination, isFocused]);

  return (
    <Background>
      <Container>
        <Title>Materiais do Lar</Title>
        <Input
          icon="search"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Filtrar por nome"
          value={name}
          onChangeText={setName}
          onChange={() => setPage(1)}
        />
        <Input
          icon="search"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Filtrar por localização"
          value={location}
          onChangeText={setLocation}
          onChange={() => setPage(1)}
        />

        <List
          data={itens}
          page={page}
          setPage={setPage}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Material navigation={navigation} data={item} />
          )}
        />
        <Pagination>
          <TouchableOpacity
            disabled={page === 1}
            onPress={() => setPage(page - 1)}
          >
            <Icon
              name="chevron-left"
              size={20}
              color={page === 1 ? '#a3a0a0' : '#fff'}
            />
          </TouchableOpacity>

          <TouchableOpacity
            disabled={page >= maxPagination}
            onPress={() => setPage(page + 1)}
          >
            <Icon
              name="chevron-right"
              size={20}
              color={page >= maxPagination ? '#a3a0a0' : '#fff'}
            />
          </TouchableOpacity>
        </Pagination>
      </Container>
    </Background>
  );
}

export default withNavigationFocus(SelectProvider);
