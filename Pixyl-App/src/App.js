import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//SCREENS
import ChatBot from "./screens/ChatBot";
import VoiceBot from "./screens/VoiceBot";
import Settings from "./screens/Settings";
import AskAccount from "./screens/AskAccount";
import Login from "./screens/Login";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {/* <Stack.Screen name="Login" component={Login} /> */}
        
        <Stack.Screen name="ChatBot" component={ChatBot} />
        <Stack.Screen name="VoiceBot" component={VoiceBot} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="AskAccount" component={AskAccount} />
        <Stack.Screen name="Login" component={Login} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
