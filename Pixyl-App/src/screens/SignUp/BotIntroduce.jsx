import React from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../components/Layout/GlobalStyles";

//COMPONENTS
import BigMessage from "../../components/Message/BigMessage";
import Stepper from "../../components/Layout/Stepper";

const BotIntroduce = () => {
  return (
    <View style={styles.root}>
      <BigMessage
        direction="buttom"
        text={[
          "Hey! I’m Emo/Kira... Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.",
        ]}
      />
      <View style={styles.bot}>
        <View style={GlobalStyles.botNormal} />
      </View>
      <Stepper index={0} nextScreen='Username' />
    </View>
  );
};
export default BotIntroduce;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#101429",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bot: {
    width: "100%",
    marginTop: 15,
    display: "flex",
    alignItems: "flex-end",
  },
});
