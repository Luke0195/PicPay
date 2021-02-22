import React from "react";
import { View, Text } from "react-native";
import { Wrapper, NotificationsTitle, Container } from "./styled";

export default function Notifications() {
  return (
    <Container>
      <Wrapper>
        <NotificationsTitle> Notificações </NotificationsTitle>
      </Wrapper>
    </Container>
  );
}
