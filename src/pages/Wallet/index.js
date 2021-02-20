import React, { useState } from "react";
import { Switch } from "react-native";

import FeatherIcons from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

import cardImage from "../../images/credit-card.png";

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
  UserBalance,
  UserBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardImage,
  CardText,
  CardContent,
  CardTitle,
  CardContainer,
  AddContainer,
  AddLabel,
  AddButton,
  TicketContainer,
  TicketText,
} from "./styles";

export default function Wallet() {
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleVisible() {
    setIsVisible((prevState) => !prevState);
  }
  return (
    <Wrapper>
      <Header colors={["#52e78c", "#1aB563"]}>
        <HeaderContainer>
          <Title> Seu Saldo PayNow</Title>
          <BalanceContainer>
            <Balance>
              R$
              <BalanceBold> {isVisible ? "78.871,63" : "-------"}</BalanceBold>
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
      <UserBalance>
        <UserBalanceTitle> Usar Saldo ao pagar </UserBalanceTitle>
        <Switch />
      </UserBalance>
      <PaymentMethods>
        <PaymentMethodsTitle> formas de pagemento </PaymentMethodsTitle>
        <Card>
          <CardContainer>
            <CardContent>
              <CardTitle> Cadastre seu cartão de crédito</CardTitle>
              <CardText>
                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo
                quando não tiver saldo no seu PayNow.
              </CardText>
            </CardContent>
            <CardImage source={cardImage} resizeMode="contain" />
          </CardContainer>
          <AddContainer>
            <AddButton>
              <AntDesign name="pluscircleo" size={30} color="#0d8060" />
              <AddLabel> Adicionar uma conta</AddLabel>
            </AddButton>
          </AddContainer>
        </Card>
      </PaymentMethods>
      <TicketContainer>
        <MaterialIcons name="ticket-outline" color="#0d8060" size={25} />
        <TicketText> Usar código promocial</TicketText>
      </TicketContainer>
    </Wrapper>
  );
}
