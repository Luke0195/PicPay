import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 16,
  },
}))`
  margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
  background: ${({ bgColor }) => bgColor};
  width: 150px;
  height: 200px;
  border-radius: 8px;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;
export const Img = styled.Image`
  align-self: center;
  margin-top: 10px;
`;
export const Title = styled.Text`
  width: 100%;
  color: #fff;
  font-size: 15px;
  text-align: center;

  font-family: "Roboto-Medium";
`;
