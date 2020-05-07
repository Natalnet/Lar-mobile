import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../../components/Background';

import { Container, Title, Available, Input, SubmitButton } from './styles';

export default function Confirm({ navigation }) {
  const [amount, setAmount] = useState('');
  const [available, setAvailable] = useState(false);
  const item = navigation.getParam('data');

  useEffect(() => {
    function buttonAvailable() {
      if (item.amount_available >= amount && amount <= item.amount_available) {
        setAvailable(true);
      } else {
        setAvailable(false);
      }

      if (amount === '') {
        setAvailable(false);
      }
      setAmount;
    }

    buttonAvailable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  return (
    <Background>
      <Container>
        <Title>{item.name}</Title>
        <Available>Quantidade disponível: {item.amount_available}</Available>
        <Input
          keyboardType="numeric"
          icon="dialpad"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Quantidade desejada"
          value={amount}
          onChangeText={setAmount}
        />
        <SubmitButton
          available={available}
          onPress={
            available
              ? () => navigation.navigate('ConfirmItem', { item, amount })
              : () => Alert.alert('Falha', 'Digita uma quantidade disponível')
          }
        >
          Confirmar quantidade
        </SubmitButton>
      </Container>
    </Background>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Escolher quantidade',
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
