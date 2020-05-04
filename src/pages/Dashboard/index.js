import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';
import { TouchableOpacity } from 'react-native';

import api from '../../services/api';
import Background from '../../components/Background';
import Appointment from '../../components/Appointment/index';

import { Container, Title, List } from './styles';

function Dashboard({ isFocused, navigation }) {
  const [borroweds, setBorroweds] = useState([]);

  async function loadBorrowed() {
    const response = await api.get('borrowed');

    setBorroweds(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadBorrowed();
    }
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <Title>Seus empréstimos</Title>

        <List
          data={borroweds}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment navigation={navigation} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

export default withNavigationFocus(Dashboard);
