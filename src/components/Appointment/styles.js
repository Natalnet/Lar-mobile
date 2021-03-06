import styled from 'styled-components/native';

import Button from '../../components/Button';

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

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Time = styled.Text`
  color: #999;
  font-size: 13px;
  margin-top: 4px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
  width: 100%;
  height: 42px;
`;
