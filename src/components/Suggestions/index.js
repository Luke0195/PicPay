import React from "react";
import { Container, Options, Label, Image } from "./styles";

import img1 from "../../images/01.png";
import img2 from "../../images/02.png";
import img3 from "../../images/03.png";
import img4 from "../../images/04.png";
import img5 from "../../images/05.png";
import img6 from "../../images/06.png";
import img7 from "../../images/07.png";
import img8 from "../../images/08.png";
import img9 from "../../images/09.png";
import img10 from "../../images/10.png";
import img11 from "../../images/11.png";
import img12 from "../../images/12.png";
import img13 from "../../images/13.png";

const items = [
  {
    key: String(Math.random()),
    img: img1,
    label: "Doações",
  },

  {
    key: String(Math.random()),
    img: img2,
    label: "Uber",
  },

  {
    key: String(Math.random()),
    img: img3,
    label: "Bus",
  },

  {
    key: String(Math.random()),
    img: img4,
    label: "Sky",
  },

  {
    key: String(Math.random()),
    img: img5,
    label: "Love",
  },

  {
    key: String(Math.random()),
    img: img6,
    label: "Qrcode",
  },

  {
    key: String(Math.random()),
    img: img7,
    label: "Icash",
  },

  {
    key: String(Math.random()),
    img: img8,
    label: "Xysz",
  },

  {
    key: String(Math.random()),
    img: img9,
    label: "Shadow",
  },

  {
    key: String(Math.random()),
    img: img10,
    label: "Union",
  },

  {
    key: String(Math.random()),
    img: img11,
    label: "Finances",
  },

  {
    key: String(Math.random()),
    img: img12,
    label: "PicPay",
  },

  {
    key: String(Math.random()),
    img: img13,
    label: "NetShoes",
  },
];

export default function Suggestion() {
  return (
    <Container>
      {items.map((item) => (
        <Options key={item.key}>
          <Image source={item.img} />
          <Label> {item.label}</Label>
        </Options>
      ))}
    </Container>
  );
}
