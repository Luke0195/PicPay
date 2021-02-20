import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";

export const Wrapper = styled.View`
  background: #030404;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: "Roboto-Light";
`;

export const BalanceContainer = styled.View`
  margin: 20px 0;
  flex-direction: row;
  align-items: center;
`;
export const Balance = styled.Text`
  font-size: 30px;
  color: #fff;
  font-family: "Roboto-Light";
  text-align: center;
`;
export const BalanceBold = styled.Text`
  color: #fff;
  font-family: "Roboto-Medium";
  margin-left: 30px;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  font-size: 15px;
  color: #fff;
  font-family: "Roboto-Regular";
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 25px;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;
export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 120px;
  height: 45px;
  padding: 0 5px;
  justify-content: space-around;
  border-radius: 8px;
`;
export const ActionLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "Roboto-Regular";
`;
