import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Iconicos from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Slider from "../../components/Slider";
import {
  Wrapper,
  Header,
  HeaderBody,
  Input,
  HeaderFooter,
  Title,
  Actions,
  Label,
  Body,
  BodyTitle,
  Content,
  ContentText,
  ContentTitle,
  Footer,
  FooterTitle,
} from "./styles";

export default function Payment() {
  return (
    <Wrapper>
      <Header>
        <HeaderBody>
          <MaterialCommunityIcons
            name="qrcode-scan"
            color="#00ff6c"
            size={30}
          />
          <Input
            placeholder="A quem  você deseja pagar ?"
            placeholderTextColor="#1a1a1d"
          />
        </HeaderBody>
        <HeaderFooter>
          <Title> Principais </Title>
          <Actions>
            <Iconicos name="location-outline" color="#fff" size={26} />
            <Label> Localização</Label>
          </Actions>

          <Actions>
            <MaterialCommunityIcons name="store" color="#fff" size={26} />
            <Label> Store</Label>
          </Actions>
        </HeaderFooter>
      </Header>
      <Body>
        <BodyTitle> Destaques </BodyTitle>
        <Slider />
      </Body>

      <Content>
        <ContentTitle> Utilize o PayNow </ContentTitle>
        <ContentText>
          O PicPay é um aplicativo fintech brasileiro, criado por pessoas do
          estado do Espírito Santo, disponível para download em celular dos
          sistemas operacionais Android e iOS, que funciona como uma carteira
          digital
        </ContentText>
      </Content>

      <Footer>
        <FooterTitle> Pague de onde você estiver</FooterTitle>
        <FontAwesome name="money" size={25} color="#40ff6c" />
      </Footer>
    </Wrapper>
  );
}
