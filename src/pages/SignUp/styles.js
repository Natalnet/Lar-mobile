import styled from 'styled-components/native';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 0 30px;
  margin-top: 40px;
`;

export const Imagem = styled(Image)`
  height: 190px;
  width: 230px;
  align-self: center;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 15px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const SignLinkText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
