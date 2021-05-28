import React from "react";
import { Theme } from "../Layout/GlobalStyles";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ value, handleValue, placeholder, multiline = false }) => {
  return (
    <TextInput
      multiline={multiline}
      style={styles.root}
      placeholder={placeholder}
      value={value}
      onChangeText={(e) => handleValue(e)}
    />
  );
};
export default Input;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Theme.backgroundSecondary,
    borderRadius: 20,
    height: "auto",
    maxHeight: 80,
    borderWidth: 0,
    color: "#2E4E65",
    marginRight: 15,
    width: "100%",
  },
});
