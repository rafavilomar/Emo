import React from "react";
import { Theme } from "../components/Layout/GlobalStyles";
import { StyleSheet, View } from "react-native";

//COMPONENTS
import MessageButton from "../components/Button/MessageButton";
import BigMessage from "../components/Message/BigMessage";

const AskAccount = () => {
  return (
    <View style={styles.root}>
      <View style={styles.top}>
        <View style={styles.bot}></View>
        <BigMessage text="Mmmm... Have we met before?" />
      </View>
      <View style={styles.actions}>
        <MessageButton text="Yes! I’m..." onPress={() => null} />
        <MessageButton
          variant="secondary"
          text="No. Who are you?"
          onPress={() => null}
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
  bot: {
    height: 150,
    width: 150,
    backgroundColor: Theme.bot,
    borderRadius: 1000,
  },
  top: {
    display: "flex",
    alignItems: "center",
    height: 250,
    justifyContent: 'space-between'
  },
  actions: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 95,
  },
});
