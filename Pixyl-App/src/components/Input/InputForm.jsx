import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Theme } from "../Layout/GlobalStyles";

const InputForm = ({ title, value, multiline = false }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} value={value} multiline={multiline} />
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
  },
});
