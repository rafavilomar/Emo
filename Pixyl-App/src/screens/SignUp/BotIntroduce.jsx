import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../components/Layout/GlobalStyles";

//COMPONENTS
import BigMessage from "../../components/Message/BigMessage";
import Stepper from "../../components/Layout/Stepper";

import img from "../../assets/character/pixyl.png";

const BotIntroduce = () => {
  return (
    <View style={styles.root}>
      <BigMessage
        direction="buttom"
        text={[
          "Hi! I am Pixyl. I am very happy that we can meet.",
          "Maybe this is the beginning of a great story.",
        ]}
      />
      <View style={styles.bot}>
        <Image source={img} style={GlobalStyles.botNormal} />
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
