import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import {
  Container,
  Wrapper,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from "./styled";

import Suggestions from "../../components/Suggestions";
import Actives from "../../components/Actives";
import Tips from "../../components/Tips";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons
            name="qrcode-scan"
            color="#00ff6c"
            size={30}
          />
          <BalanceContainer>
            <BalanceTitle> Meu Saldo </BalanceTitle>
            <Balance> R$ 78.871,63</Balance>
          </BalanceContainer>
          <AntDesignIcons name="gift" color="#00ff6c" size={30} />
        </Header>
        <Suggestions />
        <Actives />
        <Tips />
        <Banner />
      </Container>
    </Wrapper>
  );
}
