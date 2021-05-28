import React from "react";
import { Theme } from "../Layout/GlobalStyles";
import { StyleSheet, Text, TextInput, View } from "react-native";

const InputForm = ({ title, value, multiline = false, handleValue }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} value={value} multiline={multiline} onChangeText={(e) => handleValue(e)} />
    </View>
  );
};
export default InputForm;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 14,
    color: Theme.background,
    opacity: 0.5,
  },
  input: {
    paddingVertical: 5,
    fontWeight: 600,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: Theme.bot,
    color: "#2E4E65",
  },
});
