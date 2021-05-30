import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
//SCREENS
import ChatBot from "./screens/ChatBot";
import VoiceBot from "./screens/VoiceBot";
import Settings from "./screens/Settings";
import AskAccount from "./screens/AskAccount";
import Login from "./screens/Login";
import BotIntroduce from "./screens/SignUp/BotIntroduce";
import Finish from "./screens/SignUp/Finish";
import Username from "./screens/SignUp/Username";
import Password from "./screens/SignUp/Password";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="AskAccount" component={AskAccount} />
        
        <Stack.Screen name="ChatBot" component={ChatBot} />
        <Stack.Screen name="VoiceBot" component={VoiceBot} />
        <Stack.Screen name="Settings" component={Settings} />
        {/* <Stack.Screen name="AskAccount" component={AskAccount} /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BotIntroduce" component={BotIntroduce} />
        <Stack.Screen name="Username" component={Username} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Finish" component={Finish} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
