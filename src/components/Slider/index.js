import React from "react";
import Ionicos from "react-native-vector-icons/Ionicons";
import { Container, Element, ElementLabel } from "./styles";

const icons = [
  {
    key: String(Math.random()),
    name: "card",
    description: " Compras",
  },

  {
    key: String(Math.random()),
    name: "car-sport-sharp",
    description: " Carros",
  },

  {
    key: String(Math.random()),
    name: "logo-android",
    description: "Smartphones",
  },

  {
    key: String(Math.random()),
    name: "cloud",
    description: "Nuvens",
  },
];

export default function Slider() {
  return (
    <>
      <Container>
        {icons.map((icon) => (
          <Element key={icon.key}>
            <Ionicos name={icon.name} color="#fff" size={30} />
            <ElementLabel> {icon.description}</ElementLabel>
          </Element>
        ))}
      </Container>
    </>
  );
}
