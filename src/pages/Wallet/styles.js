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
  width: 280px;
`;
export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 120px;
  height: 45px;
  padding: 10px;
  justify-content: space-around;
  border-radius: 20px;
`;
export const ActionLabel = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "Roboto-Regular";
`;

export const UserBalance = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #1c1c1e;
  height: 60px;
  padding: 0 10px;
`;

export const UserBalanceTitle = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: "Roboto-Medium";
`;

export const PaymentMethods = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;
export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  font-size: 14px;
  font-family: "Roboto-Regular";
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const Card = styled.View`
  background: #1e2324;
  padding: 15px;
  height: 150px;
  border-radius: 8px;
`;
export const CardContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CardContent = styled.View`
  flex: 1;
  margin-right: 14px;
`;
export const CardTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: left;
`;
export const CardText = styled.Text`
  color: rgba(255, 255, 255, 0.6);
  margin-top: 8px;
  font-size: 14px;
`;

export const CardImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const AddContainer = styled.View`
  margin: 14px 0 8px 5px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;

  align-items: center;
`;

export const AddLabel = styled.Text`
  margin-left: 10px;
  font-family: "Roboto-Medium";
  font-size: 18px;
  color: #0d8060;
`;

export const TicketContainer = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TicketText = styled.Text`
  font-size: 18px;
  color: #0d8060;
  padding-bottom: 2px;
  border-bottom-width: 1px;
  border-color: #0ee3a8;
`;
