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
    fontFamily: 'sans-serif'
  },
  titleDark: {
    fontWeight: "bold",
    fontSize: 20,
    color: Theme.backgroundSecondary,
    fontFamily: 'sans-serif'
  },
  botSmall: {
    position: "absolute",
    left: 20,
    top: 25,
    backgroundColor: 'transparent',
    width: 80,
    height: 80,
    borderRadius: 1000,
    zIndex: 1000,
  },
  botNormal: {
    height: 150,
    width: 150,
  },
});
