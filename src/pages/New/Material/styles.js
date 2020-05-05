import styled from 'styled-components/native';

import Button from '../../../components/Button';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 10px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Available = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

export const UnAvailable = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

export const Location = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 12px;
  width: 100%;
  height: 42px;
`;
