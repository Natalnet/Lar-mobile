import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';

import Background from '../../../components/Background';
import Material from '../Material';

import { Container, Title, List, Input, Pagination } from './styles';

export default function SelectProvider({ navigation }) {
  const [itens, setItens] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadItens() {
      const response = await api.get(
        `/invetory?page=${page}${name ? '&name=' + name : ''}${
          location ? '&location=' + location : ''
        }`
      );

      setItens(response.data);
    }
    loadItens();
  }, [page, name, location]);

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
        />
        <Input
          icon="search"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Filtrar por localização"
          value={location}
          onChangeText={setLocation}
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

          <TouchableOpacity onPress={() => setPage(page + 1)}>
            <Icon name="chevron-right" size={20} color="#fff" />
          </TouchableOpacity>
        </Pagination>
      </Container>
    </Background>
  );
}
