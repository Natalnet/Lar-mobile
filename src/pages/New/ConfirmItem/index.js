import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';

import Background from '../../../components/Background';

import { Container, Name, Amount, SubmitButton } from './styles';

export default function ConfirmItem({ navigation }) {
  const item = navigation.getParam('item');
  const amount = navigation.getParam('amount');

  async function handleSubmit() {
    await api.post('/borrowed', {
      item_id: item.id,
      amount,
    });

    Alert.alert(
      'Empréstimo realizado',
      `Material: ${item.name} \n Quantidade: ${amount}`
    );

    navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Name>{item.name}</Name>
        <Amount>Quantidade a ser emprestada: {amount}</Amount>
        <SubmitButton onPress={handleSubmit}>Confirmar Empréstimo</SubmitButton>
      </Container>
    </Background>
  );
}

ConfirmItem.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar empréstimo',
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
