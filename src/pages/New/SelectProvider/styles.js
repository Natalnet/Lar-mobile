import styled from 'styled-components/native';

import INput from '../../../components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: { padding: 30 },
})``;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  align-self: center;
  margin-top: 30px;
`;

export const Input = styled(INput)`
  margin: 10px auto 0;
  width: 90%;
`;

export const Pagination = styled.View`
  bottom: 0;
  position: absolute;
  display: flex;
  width: 97%;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 5px;
  margin-bottom: 10px;
`;
