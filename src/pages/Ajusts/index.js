import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

import { Wrapper, Content, Title, OptionsLabel, OptionsList } from "./styles";

export default function Settings() {
  return (
    <>
      <Wrapper>
        <Content>
          <Title> Settings </Title>
          <OptionsList>
            <AntDesign name="user" color="#fff" size={23} />
            <OptionsLabel> Conta </OptionsLabel>
          </OptionsList>

          <OptionsList>
            <AntDesign name="eyeo" color="#fff" size={23} />
            <OptionsLabel> Aparência</OptionsLabel>
          </OptionsList>

          <OptionsList>
            <Feather name="lock" color="#fff" size={23} />
            <OptionsLabel> Segurança de Privacidade</OptionsLabel>
          </OptionsList>

          <OptionsList>
            <AntDesign name="Trophy" color="#fff" size={23} />
            <OptionsLabel> Ccnquistas</OptionsLabel>
          </OptionsList>

          <OptionsList>
            <Feather name="headphones" color="#fff" size={23} />
            <OptionsLabel> Acessibilidade</OptionsLabel>
          </OptionsList>
        </Content>
      </Wrapper>
    </>
  );
}
