import React from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles, Theme } from "../../components/Layout/GlobalStyles";

//COMPONENTS
import InputMessage from "../../components/Input/InputMessage";
import BigMessage from "../../components/Message/BigMessage";
import Stepper from "../../components/Layout/Stepper";

const Username = () => {
  const [username, setUserName] = React.useState();
  const handleUserName = (value) => {
    setUserName(value);
  };

  return (
    <View style={styles.root}>
      <View style={styles.top}>
        <View style={GlobalStyles.botNormal}></View>
        <BigMessage
          text={["I’ld like to meet you, would you mind telling me your name?"]}
        />
      </View>
      <View style={styles.action}>
        <InputMessage
          value={username}
          handleValue={handleUserName}
          text={`Sure! I'm`}
          placeholder="Enter an username"
        />
      </View>
      <Stepper index={1} nextScreen='Password' />
    </View>
  );
};
export default Username;

const styles = StyleSheet.create({
  root: {
    backgroundColor: Theme.background,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  top: {
    display: "flex",
    alignItems: "center",
    height: 250,
    justifyContent: "space-between",
  },
  action: {
    marginTop: 35,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "flex-end",
  },
});
