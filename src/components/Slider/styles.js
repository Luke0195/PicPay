import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
}))`
  margin-top: 25px;
  background: #1e222b;
  height: 100px;
  padding: 10px 8px;
`;
export const Element = styled.View`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-right: 25px;
  background: #03719c;
  border-radius: 8px;
`;

export const ElementLabel = styled.Text`
  font-family: "Roboto-Regular";
  font-size: 15px;
  color: red;
  margin-top: 3px;
  color: #ccc;
`;
