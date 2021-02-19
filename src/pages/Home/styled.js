import styled from "styled-components/native";

// Area segura vai pegar abaixo da status Bar até antes das tabs.
export const Wrapper = styled.SafeAreaView`
  background: #030404;
  flex: 1;
`;

// Devemos Usar uma scrollView sempre que formos precisar de rolagem

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 16px 16px 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-family: "Roboto-Regular";
  text-align: center;
`;
export const Balance = styled.Text`
  color: #fff;
  font-size: 20px;
  font-family: "Roboto-Medium";
  text-align: center;
`;
