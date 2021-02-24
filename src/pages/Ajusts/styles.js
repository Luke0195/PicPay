import styled from "styled-components/native";

export const Wrapper = styled.View`
  background: #030404;
  flex: 1;
`;

export const Content = styled.View`
  margin-top: 25px;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  margin: 25px 0;
  font-size: 23px;
  font-family: "Roboto-Regular";
`;

export const OptionsList = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;
  margin: 20px 0;
  border-bottom-width: 1px;
  padding: 0 16px;

  border-bottom-color: rgba(255, 255, 255, 0.3);
  padding-bottom: 4px;
`;

export const OptionsLabel = styled.Text`
  color: #fff;
  font-size: 18px;
  line-height: 26px;
  margin-left: 20px;
`;
