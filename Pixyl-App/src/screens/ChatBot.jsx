import React from "react";
import { Theme } from "../components/Layout/GlobalStyles";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import { conversation, greeting } from "../utils/testBot";

//COMPONENTS
import IconButton from "../components/Button/IconButton";
import Input from "../components/Input/Input";
import Message from "../components/Message/Message";

const ChatBot = () => {
  const navigation = useNavigation();

  // STATES
  const [msgValue, setMsgValue] = React.useState();

  // FUNCTIONS
  const handleMsgValue = async (value) => {
    setMsgValue(value);
  };
  const sendMessage = () => {
    greeting(msgValue);
    setMsgValue("");
  };

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <TouchableOpacity
        style={styles.bot}
        onPress={() => navigation.navigate("VoiceBot")}
      ></TouchableOpacity>
      <ScrollView style={styles.content}>
        {conversation.map((message) => (
          <Message text={message.text} from={message.from} key={message.text} />
        ))}
      </ScrollView>
      <View style={styles.input}>
        <Input
          value={msgValue}
          handleValue={handleMsgValue}
          placeholder="Type a message"
          multiline
        />
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
  input: {
    borderTopColor: Theme.backgroundSecondary,
    borderTopWidth: 2,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bot: {
    position: "absolute",
    left: 20,
    top: 25,
    backgroundColor: Theme.bot,
    width: 80,
    height: 80,
    borderRadius: 100,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
