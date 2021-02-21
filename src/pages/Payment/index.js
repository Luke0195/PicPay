import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Iconicos from "react-native-vector-icons/Ionicons";
import {
  Wrapper,
  Header,
  HeaderBody,
  Input,
  HeaderFooter,
  Title,
  Actions,
  Label,
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
    </Wrapper>
  );
}
