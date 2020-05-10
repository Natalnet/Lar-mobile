import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '../../assets/logo-01.png';

import Background from '../../components/Background';
import { signUpRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  Imagem,
} from './styles';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const mailRef = useRef();
  const passowordRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [project, setProject] = useState('');

  const loading = useSelector(state => state.auth.loading);

  async function handleSubmit() {
    try {
      await dispatch(signUpRequest(name, email, password, project));
      navigation.navigate('SignIn');
    } catch (err) {}
  }

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
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={mailRef}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="work"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Seu projeto. EX: URA, GIM"
            value={project}
            onChangeText={setProject}
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite sua senha"
            ref={passowordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Criar Conta
          </SubmitButton>
        </Form>

        <SignLink
          loading={loading}
          onPress={() => navigation.navigate('SignIn')}
        >
          <SignLinkText>Já tenho uma conta</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
