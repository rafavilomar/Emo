import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Button = ({ text, variant = "primary", onPress }) => {
  return (
    <View style={{ borderRadius: 10, overflow: "hidden" }}>
      <TouchableOpacity
        style={[
          styles.btn,
          variant === "primary" ? styles.primary : styles.secondary,
        ]}
        onPress={() => onPress()}
      >
        <Text
          style={[
            styles.text,
            variant === "primary" ? styles.textPrimary : styles.textSecondary,
          ]}
        >
          {" "}
          {text}{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Button;

const styles = StyleSheet.create({
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontWeight: "600",
  },
  primary: {
    backgroundColor: "#3A908D",
  },
  secondary: {
    backgroundColor: "#E1F5F3",
  },
  textPrimary: {
    fontWeight: "600",
    color: "#f4f4f4",
  },
  textSecondary: {
    fontWeight: "600",
    color: "#101429",
  },
});