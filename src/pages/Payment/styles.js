import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background: #030405;
  flex: 1;
`;

export const Header = styled.View`
  height: 120px;
  background: #1e222b;
  padding: 10px 16px;
`;

export const HeaderBody = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Input = styled.TextInput`
  font-family: "Roboto-Regular";
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 300px;
  border: 0;
  color: #000;
  margin-left: 8px;
  font-size: 15px;
  border-radius: 20px;
  padding-left: 25px;
  height: 40px;
  font-size: 18px;
  align-items: center;
  display: flex;
  align-items: center;
`;

export const HeaderFooter = styled.View`
  flex-direction: row;
  margin-top: 25px;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: "Roboto-Medium";
  letter-spacing: 1px;
`;

export const Actions = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
export const Label = styled.Text`
  font-size: 17px;
  color: rgba(255, 255, 255, 0.5);
`;

export const Body = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const BodyTitle = styled.Text`
  color: #fff;
  font-size: 18px;
  line-height: 28px;
  font-family: "Roboto-Regular";
`;

export const Content = styled.View`
  background: #428a4e;
  margin: 25px 16px 0 16px;
  padding: 8px 3px;
  border-radius: 8px;
`;

export const ContentTitle = styled.Text`
  font-size: 16px;
  font-family: "Roboto-Medium";
  margin: 5px;
  color: #fff;
`;

export const ContentText = styled.Text`
  color: #e1ede3;
  margin: 4px;
`;

export const Footer = styled.View`
  margin: 35px auto;
  flex-direction: row-reverse;
  align-items: center;
  border-bottom-width: 2px;
  border-style: solid;
  border-bottom-color: #52a861;
`;

export const FooterTitle = styled.Text`
  color: #40ff6c;
  font-size: 15px;
  margin-left: 4px;
  text-transform: uppercase;
`;
