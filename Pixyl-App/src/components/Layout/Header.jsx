import React from "react";
import { Theme } from "../Layout/GlobalStyles";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../Button/IconButton";

import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";

const Header = ({
  title,
  back = false,
  settings = false,
  variant = "light",
  backScreen,
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.root, variant === "dark" && styles.dark]}>
      <View style={styles.option}>
        {back && (
          <IconButton
            variant={variant === "light" ? "header" : "dark"}
            icon={
              <Ionicons
                name="arrow-back"
                size={24}
                color={
                  variant === "light"
                    ? Theme.background
                    : Theme.backgroundSecondary
                }
              />
            }
            onPress={() => backScreen && navigation.navigate(backScreen)}
          />
        )}
      </View>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.option}>
        {settings && (
          <IconButton
            variant={variant === "light" ? "header" : "dark"}
            icon={
              <Ionicons
                name="settings-outline"
                size={22}
                color={
                  variant === "light"
                    ? Theme.background
                    : Theme.backgroundSecondary
                }
              />
            }
            onPress={() => navigation.navigate("Settings")}
          />
        )}
      </View>
      <StatusBar style={variant === "dark" ? "light" : "dark"} />
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 5,
    borderBottomColor: Theme.backgroundSecondary,
    borderBottomWidth: 2,
    backgroundColor: "white",
  },
  text: {
    flexGrow: 1,
    fontWeight: '600',
    fontSize: 22,
    color: Theme.background,
    marginHorizontal: 10
  },
  option: {
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dark: {
    backgroundColor: Theme.background,
    borderBottomWidth: 0,
  },
});
