import styled from 'styled-components/native';

import Button from '../../../components/Button';
import INput from '../../../components/Input';

export const Container = styled.View`
  padding: 30px;
  border-radius: 10px;
  width: 95%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 125px;
  height: 120px;
  border-radius: 60px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const Available = styled.Text`
  margin-top: 4px;
  font-size: 18px;
  color: #fff;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  margin-top: 20px;
  background: ${({ available }) =>
    available ? '#3b9eff' : 'rgba(114, 141, 168, 0.5)'};
`;

export const Input = styled(INput)`
  margin-top: 15px;
`;
