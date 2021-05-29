import React from "react";
import { GlobalStyles, Theme } from "../components/Layout/GlobalStyles";
import { Image, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

//COMPONENTS
import MessageButton from "../components/Button/MessageButton";
import BigMessage from "../components/Message/BigMessage";

import img from "../assets/character/pixyl.png";

const AskAccount = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.root}>
      <View style={styles.top}>
        <Image source={img} style={GlobalStyles.botNormal} />
        <BigMessage text={["Mmmm... Have we met before?"]} />
      </View>
      <View style={styles.actions}>
        <MessageButton
          text="Yes! I’m..."
          onPress={() => navigation.navigate("Login")}
        />
        <MessageButton
          variant="secondary"
          text="No. Who are you?"
          onPress={() => navigation.navigate("BotIntroduce")}
        />
      </View>
    </View>
  );
};
export default AskAccount;

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: Theme.background,
    justifyContent: "space-around",
  },
  top: {
    display: "flex",
    alignItems: "center",
    height: 250,
    justifyContent: "space-between",
  },
  actions: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 95,
  },
});
