import React from "react";
import { GlobalStyles } from "../components/Layout/GlobalStyles";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

//COMPONENTS
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

const Login = () => {
  const navigation = useNavigation();

  //STATES
  const [username, setUserName] = React.useState();
  const [password, setPassword] = React.useState();

  // FUNCTIONS
  const handleUserName = (value) => {
    setUserName(value);
  };
  const handlePassword = (value) => {
    setPassword(value);
  };

  return (
    <View style={styles.root}>
      <View style={styles.form}>
        <Text style={GlobalStyles.titleDark}>Hi! I'm...</Text>
        <Input
          placeholder="Username"
          value={username}
          handleValue={handleUserName}
        />
        <Input
          placeholder="Password"
          value={password}
          handleValue={handlePassword}
        />
      </View>
      <View style={styles.action}>
        <Button text="Login" onPress={() => null} />
        <Button text="Back" variant="secondary" onPress={() => null} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#101429",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
  },
  form: {
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 160,
  },
  action: {
    display: "flex",
    alignItems: "center",
    height: 100,
    justifyContent: "space-between",
    marginTop: 50,
  },
});
