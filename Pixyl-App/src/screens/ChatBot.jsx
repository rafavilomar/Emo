import React from "react";
import { GlobalStyles, Theme } from "../components/Layout/GlobalStyles";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { conversation, greeting } from "../utils/testBot";

//COMPONENTS
import IconButton from "../components/Button/IconButton";
import Input from "../components/Input/Input";
import Message from "../components/Message/Message";
import Header from "../components/Layout/Header";

import img from "../assets/character/pixyl.png";

const ChatBot = () => {
  const navigation = useNavigation();

  // STATES
  const [msgValue, setMsgValue] = React.useState();

  // FUNCTIONS
  const handleMsgValue = (value) => {
    setMsgValue(value);
  };
  const sendMessage = () => {
    greeting(msgValue);
    setMsgValue("");
  };

  return (
    <View style={styles.root}>
      <Header settings />
      <StatusBar style="dark" />
      <TouchableOpacity
        style={GlobalStyles.botSmall}
        onPress={() => navigation.navigate("VoiceBot")}
      >
        <View >
        <Image
          source={img}
          style={{
            width: '100%',
            height: '100%',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 11,
            },
            shadowOpacity: 0.57,
            shadowRadius: 15.19,

            elevation: 23,
          }}
        />
        </View>
      </TouchableOpacity>
      {/* <ImageBackground source={img} style={GlobalStyles.botSmall} /> */}
      <ScrollView style={styles.content}>
        {conversation.map((message) => (
          <Message text={message.text} from={message.from} key={message.text} />
        ))}
      </ScrollView>
      <View style={styles.action}>
        <View style={styles.input}>
          <Input
            value={msgValue}
            handleValue={handleMsgValue}
            placeholder="Type a message"
            multiline
          />
        </View>
        <IconButton
          icon={
            <Ionicons name="send" size={20} color={Theme.backgroundSecondary} />
          }
          onPress={sendMessage}
        />
      </View>
    </View>
  );
};
export default ChatBot;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#ffffff",
  },
  content: {
    flex: 1,
    overflow: "scroll",
  },
  action: {
    borderTopColor: Theme.backgroundSecondary,
    borderTopWidth: 2,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    marginRight: 15,
  },
});
