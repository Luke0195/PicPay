import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { Button, Label } from "./styles";

export default function PayButton({ focused }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Payment")}>
      <Button
        colors={focused ? ["#fff", "#ccc"] : ["#00ff6c", "#00ac4a"]}
        start={{ x: 1, y: 0.2 }}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? "#000" : "#fff"}
        />
        <Label focused={focused}> Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
