import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { GlobalStyles, Theme } from "../../components/Layout/GlobalStyles";

//COMPONENTS
import InputMessage from "../../components/Input/InputMessage";
import BigMessage from "../../components/Message/BigMessage";
import Stepper from "../../components/Layout/Stepper";

import img from "../../assets/character/pixyl.png";

const Password = () => {
  const [username, setUserName] = React.useState();
  const handleUserName = (value) => {
    setUserName(value);
  };

  return (
    <View style={styles.root}>
      <View style={styles.top}>
        {/* <View style={GlobalStyles.botNormal}></View> */}
        <Image source={img} style={GlobalStyles.botNormal} />
        <BigMessage
          text={[
            "We need a password to talk to each other. Shhh ... we shouldn't tell anyone",
          ]}
        />
      </View>
      <View style={styles.action}>
        <InputMessage
          value={username}
          handleValue={handleUserName}
          text={`Is it ok?`}
          placeholder="Enter a password"
        />
      </View>
      <Stepper index={2} nextScreen="Finish" />
    </View>
  );
};
export default Password;

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
