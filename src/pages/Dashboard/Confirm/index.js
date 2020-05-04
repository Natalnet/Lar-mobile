import React from 'react';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../../components/Background';

import { Container, Name, Amount, SubmitButton } from './styles';

export default function Confirm({ navigation }) {
  const item = navigation.getParam('data');

  async function returnItem() {
    await api.put(`/borrowed/${item.id}`);

    Alert.alert('Sucesso', 'Sua devolução foi registrada');

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Name>{item.item.name}</Name>
        <Amount>quantidade a ser devolvida: {item.amount}</Amount>
        <SubmitButton onPress={returnItem}>Confirmar devolução</SubmitButton>
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar devolução',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
