import React from 'react';

import logo from '../../assets/logo-01.png';

import Background from '../../components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Imagem,
} from './styles';

export default function SignUp({navigation}) {
  return (
    <Background>
      <Container>
        <Imagem source={logo} />
        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome e sobrenome"
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
          />

          <FormInput
            icon="work"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu projeto. Ex: GIM, URA"
          />

          <SubmitButton onPress={() => {}}>Criar conta</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tenho uma conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
