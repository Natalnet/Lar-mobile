import styled from 'styled-components/native';

import INput from '../../../components/Input';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
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
  display: flex;
  width: 90%;
  justify-content: space-between;
  flex-direction: row;
  margin: 10px auto;
`;
