import styled from 'styled-components/native';

import Button from '../../../components/Button';

export const Container = styled.View`
  width: 90%;
  margin: auto auto;
  padding: 20px;
  border-radius: 12px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Amount = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  height: 42px;
`;
