import React from "react";
import { Theme } from "../Layout/GlobalStyles";
import { StyleSheet, Text, View } from "react-native";

const BigMessage = ({ text = [], direction = "top" }) => {
  return (
    <View
      style={[
        styles.root,
        direction === "top"
          ? { borderTopLeftRadius: 0 }
          : { borderBottomLeftRadius: 0 },
      ]}
    >
      {text.map((e) => (
        <Text style={styles.text}>
          {e}
        </Text>
      ))}
    </View>
  );
};
export default BigMessage;

const styles = StyleSheet.create({
  root: {
    alignItems: "flex-start",
    //paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Theme.primary,
    width: "80%",
    maxWidth: 300,
  },
  text: {
    color: Theme.backgroundSecondary,
    fontWeight: "600",
    fontSize: 18,
    marginVertical: 10,
    fontFamily: 'sans-serif'
  },
});
