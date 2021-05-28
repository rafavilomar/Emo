import { StyleSheet } from "react-native";

export const Theme = {
  background: "#101429",
  primary: "#3A908D",
  secondary: "#E1F5F3",
  backgroundSecondary: "#F4F4F4",
  bot: "#BABBD9",
};

export const GlobalStyles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: Theme.background,
  },
  titleDark: {
    fontWeight: "bold",
    fontSize: 20,
    color: Theme.backgroundSecondary,
  }
});
