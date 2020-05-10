import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

import api from '../../services/api';

import Background from '../../components/Background';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Title, Form, FormInput, SubmitButton } from './styles';

export default function Register() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [amount, setAmount] = useState('');

  const profile = useSelector(state => state.user.profile);

  async function handleRegister() {
    if (!profile.administrador) {
      Alert.alert(
        'Permissão negada',
        'Apenas administradores podem registrar materiais'
      );
    } else {
      try {
        await api.post('/invetory', {
          name,
          location,
          amount,
          amount_available: amount,
          borrowed_amount: 0,
        });

        Alert.alert('Sucesso', 'Material registrado');

        setName('');
        setLocation('');
        setAmount('');
      } catch (err) {
        Alert.alert('Falha', 'Verifique os dados');
      }
    }
  }

  return (
    <Background>
      <Container>
        <Title>Registrar material</Title>

        <Form>
          <FormInput
            icon="chat"
            autoCorrect={false}
            placeholder="Nome do item"
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="place"
            autoCorrect={false}
            placeholder="Localição do item"
            value={location}
            onChangeText={setLocation}
          />

          <FormInput
            keyboardType="numeric"
            icon="dialpad"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Quantidade"
            returnKeyType="send"
            value={amount}
            onChangeText={setAmount}
          />

          <SubmitButton onPress={handleRegister}>Registrar item</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}

Register.navigationOptions = {
  tabBarLabel: 'Registrar item',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="add" size={20} color={tintColor} />
  ),
};
