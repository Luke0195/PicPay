import React from "react";
import { Container, Title, Img, Option } from "./styled";

import img7 from "../../images/07.png";
import img8 from "../../images/08.png";
import img9 from "../../images/09.png";
import img10 from "../../images/10.png";
import img11 from "../../images/11.png";
import img12 from "../../images/12.png";
import img13 from "../../images/13.png";

const icons = [
  {
    key: String(Math.random()),
    img: img7,
    title: "Pague sua contas sem sair de casa",
    bgColor: "#172c4a",
  },

  {
    key: String(Math.random()),
    img: img8,
    title: "Acesse o aplicativo de onde você estiver ",
    bgColor: "#6a0159",
  },

  {
    key: String(Math.random()),
    img: img9,
    title: "Aproveite as nossas melhores promoções  ",
    bgColor: "#00ab4b",
  },

  {
    key: String(Math.random()),
    img: img10,
    title: "Participe de nossa comunidade e ganhe prêmios",
    bgColor: "#b42f76",
  },

  {
    key: String(Math.random()),
    img: img11,
    title: "Consulta seu saldo de investimentos",
    bgColor: "#fc6f03",
  },

  {
    key: String(Math.random()),
    img: img12,
    title: "Alterar informações do seu perfil ",
    bgColor: "#035efc",
  },

  {
    key: String(Math.random()),
    img: img13,
    title: "Aumente seu saldo com o que há de melhor",
    bgColor: "#fc0356",
  },
];
export default function Tips() {
  return (
    <Container>
      {icons.map((icon) => (
        <Option key={icon.key} bgColor={icon.bgColor}>
          <Title> {icon.title} </Title>
          <Img source={icon.img} />
        </Option>
      ))}
    </Container>
  );
}
