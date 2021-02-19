import React from "react";
import FeatherIcons from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import avatar from "../../images/avatar.png";

import {
  Container,
  Header,
  Title,
  ContentText,
  ContentTextEverthing,
  ContentTextMy,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  CardUser,
  CardFooter,
  Details,
  Value,
  Divider,
  DateLabel,
  Actions,
  Options,
  OptionLabel,
} from "./styles";

export default function Actives() {
  return (
    <>
      <Container>
        <Header>
          <Title> Atividades</Title>
          <ContentText>
            <ContentTextEverthing> Todas</ContentTextEverthing>
            <ContentTextMy> Minhas</ContentTextMy>
          </ContentText>
        </Header>
        <Card>
          <CardHeader>
            <Avatar source={avatar} />
            <Description>
              <Bold> Você</Bold> pagou <Bold> o @WillSmith</Bold>
            </Description>
          </CardHeader>
          <CardBody>
            <CardUser>Have a nice beer mate</CardUser>
            <Ionicons name="beer-outline" size={20} color="#de8b26" />
          </CardBody>
          <CardFooter>
            <Details>
              <Value> R$ 18,00</Value>
              <Divider />
              <FeatherIcons name="lock" size={16} color="#fff" />
              <DateLabel>at 15 minutes later</DateLabel>

              <Actions>
                <Options>
                  <MaterialCommunityIcons
                    name="comment-outline"
                    size={14}
                    color="#fff"
                  />
                  <OptionLabel> 25</OptionLabel>
                </Options>

                <Options>
                  <AntDesign name="hearto" size={14} color="#fff" />
                  <OptionLabel> 3 </OptionLabel>
                </Options>
              </Actions>
            </Details>
          </CardFooter>
        </Card>
      </Container>
    </>
  );
}
