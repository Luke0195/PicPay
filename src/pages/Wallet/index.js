import React from "react";
import FeatherIcons from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  BalanceBold,
  Balance,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
} from "./styles";

export default function Wallet() {
  return (
    <Wrapper>
      <Header colors={["#52e78c", "#1aB563"]}>
        <HeaderContainer>
          <Title> Seu Saldo PicPay</Title>
          <BalanceContainer>
            <Balance>
              R$
              <BalanceBold> 0, 00</BalanceBold>
            </Balance>
            <EyeButton>
              <FeatherIcons name="eye" size={23} color="#fff" />
            </EyeButton>
          </BalanceContainer>
          <Info>Seu saldo está devendo rendendo 100% do seu CME</Info>
          <Actions>
            <Action>
              <MaterialIcons name="cash" size={25} color="#fff" />
              <ActionLabel> Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name="bank" size={20} color="#fff" />
              <ActionLabel> Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>
    </Wrapper>
  );
}
