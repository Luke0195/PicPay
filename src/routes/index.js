import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesignIcons from "react-native-vector-icons/AntDesign";

import IconiconsIcons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../pages/Home";
import WalletScreen from "../pages/Wallet";
import PaymentScreen from "../pages/Payment";
import NotificationsScreen from "../pages/Notifications";
import SettingsScreen from "../pages/Ajusts";
import PayButton from "../components/PayButton";

const Tab = createBottomTabNavigator();

const icones = {
  Home: {
    lib: AntDesignIcons,
    name: "home",
  },

  Wallet: {
    lib: AntDesignIcons,
    name: "creditcard",
  },

  Pay: {
    lib: AntDesignIcons,
    name: "pay",
  },

  Notifications: {
    lib: IconiconsIcons,
    name: "notifications-outline",
  },

  Setting: {
    lib: AntDesignIcons,
    name: "settings",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: "#131418",
          borderTopColor: "rgba(255,255,255, 0.2)",
          height: 60,
          paddingBottom: 4,
        },
        activeTintColor: "#fff",
        inactiveTintColor: "#92929c",
      }}
      initialRouteName="Wallet"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <AntDesignIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <AntDesignIcons name="creditcard" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          // eslint-disable-next-line react/prop-types
          title: "",

          tabBarIcon: ({ color, size, focused }) => (
            <PayButton name="pay" size={size} color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <IconiconsIcons
              name="notifications-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ color, size }) => (
            <AntDesignIcons name="setting" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
