import React from "react";
import { Theme } from "../components/Layout/GlobalStyles";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//COMPONENTS
import Header from "../components/Layout/Header";
import IconButton from "../components/Button/IconButton";

const VoiceBot = () => {
  return (
    <View style={styles.root}>
      <Header back variant="dark" backScreen="ChatBot" />
      <View style={styles.content}>
        <View style={styles.bot}></View>
        <IconButton
          icon={
            <Ionicons name="mic" size={40} color={Theme.backgroundSecondary} />
          }
          variant="mute"
          onPress={() => null}
        />
      </View>
    </View>
  );
};
export default VoiceBot;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Theme.background,
    display: "flex",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  bot: {
    height: 200,
    width: 200,
    backgroundColor: Theme.bot,
    borderRadius: 1000,
    marginBottom: 95,
  },
});
