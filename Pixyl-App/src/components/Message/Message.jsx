import React from "react";
import { Theme } from "../Layout/GlobalStyles";
import { StyleSheet, Text, View } from "react-native";

const Message = ({ text, from = "user", textColor, bgColor }) => {
  return (
    <View style={from === "bot" ? styles.rowBot : styles.rowUser}>
      <View
        style={[
          styles.root,
          from === "bot" ? styles.fromBot : styles.fromUser,
          bgColor !== undefined && { backgroundColor: bgColor },
        ]}
      >
        <Text
          style={[
            styles.text,
            from === "bot"
              ? { color: Theme.background }
              : { color: Theme.backgroundSecondary },
            textColor !== undefined && { color: textColor },
          ]}
        >
          {text}
        </Text>
      </View>
    </View>
  );
};
export default Message;

const styles = StyleSheet.create({
  root: {
    alignItems: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    maxWidth: "60%",
  },
  text: {
    fontSize: 14,
    fontFamily: 'sans-serif'
  },
  rowUser: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 5,
  },
  rowBot: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 5,
  },
  fromUser: {
    backgroundColor: Theme.background,
    borderBottomRightRadius: 0,
  },
  fromBot: {
    backgroundColor: Theme.backgroundSecondary,
    borderBottomLeftRadius: 0,
  },
});
