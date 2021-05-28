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
  },
  botSmall: {
    position: "absolute",
    left: 20,
    top: 25,
    backgroundColor: Theme.bot,
    width: 80,
    height: 80,
    borderRadius: 100,
    zIndex: 1000,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  botNormal: {
    height: 150,
    width: 150,
    backgroundColor: Theme.bot,
    borderRadius: 1000,
  },
});
