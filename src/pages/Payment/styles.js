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
