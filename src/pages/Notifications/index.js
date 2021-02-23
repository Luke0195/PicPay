import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  Wrapper,
  NotificationsTitle,
  Container,
  IconsContainer,
  IconContent,
  IconImage,
  IconLabel,
  IconText,
  IconTitle,
} from "./styled";

import peopleImg from "../../images/people.png";
import moneyImg from "../../images/money.png";
import avatar from "../../images/avatar.png";
import creditImg from "../../images/credit-card.png";
import recargaImg from "../../images/11.png";

const icons = [
  {
    key: String(Math.random()),
    name: "Pagar Pessoas",
    description: "Pague todos os seus amigos que utilizam o paynow",
    img: peopleImg,
  },

  {
    key: String(Math.random()),
    name: "Pagar Com dinheiro",
    description: "Pague todos os seus amigos que com dinheiro  o paynow",
    img: moneyImg,
  },

  {
    key: String(Math.random()),
    name: "Cobrar",
    description: "Cobrar um amigo",
    img: creditImg,
  },

  {
    key: String(Math.random()),
    name: "Alterar suas Informações",
    description: "Atualize seu perfil no paynow ",
    img: avatar,
  },

  {
    key: String(Math.random()),
    name: "Recarga de Celular",
    description: "Vivo, Tim, Claro, Oi,Correiros",
    img: recargaImg,
  },
];
export default function Notifications() {
  return (
    <Container>
      <Wrapper>
        <NotificationsTitle> Notificações </NotificationsTitle>
        <IconsContainer>
          {icons.map((icon) => (
            <IconContent key={icon.key}>
              <IconImage source={icon.img} resizeMode="contain" />
              <IconText>
                <IconTitle> {icon.name}</IconTitle>
                <IconLabel>{icon.description}</IconLabel>
              </IconText>
              <AntDesign name="arrowright" size={23} color="#fff" />
            </IconContent>
          ))}
        </IconsContainer>
      </Wrapper>
    </Container>
  );
}
