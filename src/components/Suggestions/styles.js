import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    alignItems: "center",
    paddingLeft: 20,
  },
}))`
  background: #1e222b;
  height: 100px;
`;

export const Options = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
export const Image = styled.Image``;
export const Label = styled.Text`
  color: #fff;
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
  font-family: "Roboto-Medium";
`;
