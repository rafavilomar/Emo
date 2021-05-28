import React from "react";
import { Theme } from "../Layout/GlobalStyles";
import { StyleSheet, Text, View } from "react-native";

const BigMessage = ({ text }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
export default BigMessage;

const styles = StyleSheet.create({
  root: {
    alignItems: "flex-start",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    backgroundColor: Theme.primary,
    width: '80%',
    maxWidth: 300
  },
  text: {
    color: Theme.backgroundSecondary,
    fontWeight: "600",
    fontSize: 16,
  },
});
