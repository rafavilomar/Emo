import React from "react";
import { GlobalStyles } from "../components/Layout/GlobalStyles";
import { ScrollView, StyleSheet, Text, View } from "react-native";

//COMPONENTS
import InputForm from "../components/Input/InputForm";
import Header from "../components/Layout/Header";

const Settings = () => {
  return (
    <ScrollView style={styles.root}>
      <Header back backScreen="ChatBot" title="Settings" />
      <View style={styles.section}>
        <View style={styles.titleSection}>
          <Text style={GlobalStyles.title}>Account</Text>
        </View>
        <InputForm title="Username" value="rafavilomar" />
        <InputForm title="Password" value="rafavilomar" />
      </View>
      <View style={styles.section}>
        <View style={styles.titleSection}>
          <Text style={GlobalStyles.title}>About Pixyl</Text>
        </View>
        <InputForm title="Race" value="Race name" />
        <InputForm
          title="Planet"
          value="Planet name and description. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          multiline
        />
      </View>
    </ScrollView>
  );
};
export default Settings;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40
  },
  titleSection: {
    paddingHorizontal: 20,
  },
});
