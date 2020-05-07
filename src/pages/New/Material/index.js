import React from 'react';

import {
  Container,
  Name,
  Available,
  UnAvailable,
  SubmitButton,
  Location,
} from './styles';

export default function Material({ data, page, setPage, navigation }) {
  return (
    <>
      <Container>
        <Name>{data.name}</Name>
        <Available>Disponível: {data.amount_available}</Available>
        <UnAvailable>Em empréstimo: {data.borrowed_amount}</UnAvailable>
        <Location>Localização: {data.location}</Location>

        {data.amount_available !== 0 && (
          <SubmitButton
            onPress={() => navigation.navigate('Confirm', { data })}
          >
            Realizar empréstimo
          </SubmitButton>
        )}
      </Container>
    </>
  );
}
