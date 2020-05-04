import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Left,
  Avatar,
  Info,
  Name,
  Time,
  SubmitButton,
} from './styles';

export default function Appointment({ navigation, data }) {
  return (
    <Container>
      <Name>{data.item.name}</Name>
      <Time>Quantidade em empréstimo: {data.amount}</Time>
      <SubmitButton
        onPress={() => navigation.navigate('ConfirmBorrowed', { data })}
      >
        Realizar devolução
      </SubmitButton>
    </Container>
  );
}
