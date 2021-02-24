import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #030404;
`;

export const Wrapper = styled.ScrollView`
  margin-top: 25px;
`;

export const NotificationsTitle = styled.Text`
  font-size: 17px;
  color: #fff;
  text-align: center;
  font-family: "Roboto-Medium";
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const IconsContainer = styled.View`
  margin-top: 25px;
  padding: 0 16px;
`;

export const IconContent = styled.View`
  margin-top: 25px;
  background: #1e222b;
  padding: 20px 8px;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
`;

export const IconImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const IconText = styled.View`
  flex: 1;
  margin-left: 15px;
`;

export const IconTitle = styled.Text`
  color: #fff;
  font-family: "Roboto-Regular";
  font-size: 17px;
  text-align: left;
`;

export const IconLabel = styled.Text`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 24px;
  text-align: left;
  font-family: "Roboto-Light";
  margin-top: 8px;
`;
