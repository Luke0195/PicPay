import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const Header = styled.View`
  height: 50px;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: "Roboto-Medium";
`;
export const ContentText = styled.View`
  flex-direction: row;
`;

export const ContentTextEverthing = styled.Text`
  margin: 0 5px;
  font-size: 18px;
  font-family: "Roboto-Medium";
  color: #00ff6c;
  padding-bottom: 4px;
  border-bottom-width: 3px;
  border-style: solid;
  border-bottom-color: #00ff6c;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 8px;
`;

export const ContentTextMy = styled.Text`
  margin: 0 5px;
  font-size: 18px;
  color: #fff;
  font-family: "Roboto-Regular";
`;

export const Card = styled.View`
  margin-top: 25px;
  background: #1e222b;
  padding: 16px;
  border-radius: 8px;
`;
export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.Image``;
export const Description = styled.Text`
  margin-left: 10px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  font-family: "Roboto-Regular";
`;
export const Bold = styled.Text`
  font-family: "Roboto-Medium";
  color: #fff;
`;

export const CardBody = styled.View`
  margin-top: 10px;
`;
export const CardUser = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: "Roboto-Medium";
`;

export const CardFooter = styled.View`
  margin-top: 16px;
`;

export const Details = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Value = styled.Text`
  color: #f75175;
  font-size: 13px;
  font-family: "Roboto-Medium";
`;

export const Divider = styled.View`
  width: 2px;
  height: 13px;
  background: rgba(255, 255, 255, 0.4);
  margin: 0 10px;
`;

export const DateLabel = styled.Text`
  color: #fff;
  font-family: "Roboto-Light";
  margin-left: 10px;
  font-size: 13px;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-left: 20px;
`;

export const Options = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const OptionLabel = styled.Text`
  color: #fff;
  margin: 0 3px;
  padding: 0 5px;
`;
