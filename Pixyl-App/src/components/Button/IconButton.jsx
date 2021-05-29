import React from "react";
import { Theme } from "../Layout/GlobalStyles";
import { StyleSheet, View, TouchableOpacity } from "react-native";

const IconButton = ({ icon, onPress, variant = "primary" }) => {
  return (
    <View style={{ borderRadius: 500, overflow: "hidden" }}>
      <TouchableOpacity
        style={[
          styles.btn,
          variant === "primary"
            ? styles.primary
            : variant === "mute"
            ? styles.mute
            : variant === "dark"
            ? styles.dark
            : styles.header,
        ]}
        onPress={() => onPress()}
      >
        {icon}
      </TouchableOpacity>
    </View>
  );
};
export default IconButton;

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderWidth: 0,
    // minHeight: 44,
    // minWidth: 44,
  },
  primary: {
    backgroundColor: Theme.primary,
  },
  mute: { width: 70, height: 70, backgroundColor: "#D60000" },
  header: {
    //backgroundColor: "#ffffff",
  },
  dark: {
    backgroundColor: Theme.background,
  },
  active: {},
  disabled: {},
});
