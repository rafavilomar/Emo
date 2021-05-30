import React from "react";
import { Theme } from "../Layout/GlobalStyles";
import { StyleSheet, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//COMPONENTS
import IconButton from "../Button/IconButton";

const Input = ({
  value,
  handleValue,
  placeholder,
  multiline = false,
  variant = "normal",
}) => {
  const [showPassword, setShowPassword] = React.useState(
    variant === "password" ? true : false
  );
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={styles.root}>
      <TextInput
        multiline={multiline}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={(e) => handleValue(e)}
        secureTextEntry={showPassword}
      />
      {variant === "password" && (
        <IconButton
          icon={
            showPassword ? (
              <Ionicons name="eye-off" size={22} color={Theme.background} />
            ) : (
              <Ionicons name="eye" size={22} color={Theme.background} />
            )
          }
          onPress={handleShowPassword}
          variant="light"
        />
      )}
    </View>
  );
};
export default Input;

const styles = StyleSheet.create({
  root: {
    borderRadius: 20,
    width: "100%",
    overflow: "hidden",
    display: "flex",
    alignItems: 'center',
    flexDirection: "row",
    backgroundColor: Theme.backgroundSecondary,
  },
  input: {
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Theme.backgroundSecondary,
    height: "auto",
    maxHeight: 80,
    borderWidth: 0,
    color: "#2E4E65",
    flex: 1,
    fontFamily: 'sans-serif'
  },
});
