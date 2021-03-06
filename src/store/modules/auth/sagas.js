import { all, takeLatest, call, put, delay } from 'redux-saga/effects';
import { Alert } from 'react-native';

import { signInSuccess, signFailure } from './actions';

import api from '../../../services/api';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    //history.push("/dashboard");
  } catch (err) {
    Alert.alert('Falha na autenticação', 'Verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, project } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
      project
    });

    Alert.alert('Sucesso', 'Conta criada com sucesso')
  } catch (err) {
    yield put(signFailure());
    Alert.alert('Falha', 'Verifique seu dados!')

  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  //history.push("/");
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
