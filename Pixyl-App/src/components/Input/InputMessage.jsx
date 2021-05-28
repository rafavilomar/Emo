import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Theme } from "../Layout/GlobalStyles";

const InputMessage = ({ text, value, handleValue, placeholder }) => {
  return (
    <View style={styles.root} >
      <Text style={styles.text} >{text}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(e) => handleValue(e)}
        placeholder={placeholder}
      />
    </View>
  );
};
export default InputMessage;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Theme.backgroundSecondary,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    maxWidth: "60%",
  },
  text: {
    fontWeight: 600,
    fontSize: 16,
    color: Theme.background,
  },
  input: {
    paddingVertical: 5,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: Theme.bot,
    color: "#2E4E65",
  },
});
