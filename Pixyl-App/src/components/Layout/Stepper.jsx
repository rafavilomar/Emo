import React from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "./GlobalStyles";

//COMPONENTS
import IconButton from "../Button/IconButton";

const Stepper = ({ index = 0, nextScreen }) => {
  const navigation = useNavigation();
  const [circles, setCircles] = React.useState([
    false,
    false,
    false,
    false,
  ]);

  const handleCircles = (i) => {
    let temCircles = circles;
    circles[i] = true;
    setCircles([...temCircles]);
  };

  React.useEffect(() => {
    handleCircles(index);
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.stepper}>
        {circles.map((e) => (
          <View
            style={[
              styles.circle,
              {
                backgroundColor: e ? Theme.primary : Theme.backgroundSecondary,
              },
            ]}
          />
        ))}
      </View>
      <IconButton
        icon={<Ionicons name="arrow-forward" size={30} color={Theme.primary} />}
        variant="dark"
        onPress={() => ( navigation.navigate(nextScreen))}
      />
    </View>
  );
};
export default Stepper;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    position: "absolute",
    height: 50,
    left: 0,
    right: 0,
    bottom: 30,
  },
  stepper: {
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  circle: {
    borderRadius: 30,
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
});
