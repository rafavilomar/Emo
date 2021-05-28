import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const MessageButton = ({ text, onPress, variant = "primary" }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => onPress()}>
        <View
          style={[
            styles.message,
            { backgroundColor: variant === "primary" ? "#3A908D" : "#E1F5F3" },
          ]}
        >
          <Text
            style={[
              styles.text,
              { color: variant === "primary" ? "#f4f4f4" : "#101429" },
            ]}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default MessageButton;

const styles = StyleSheet.create({
  root: {
    width: "fit-content",
    maxWidth: "60%",
    overflow: "hidden",
  },
  message: {
    alignItems: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    width: "fit-content",
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
});
