import React from "react";
import { Alert, Button, TouchableOpacity,StyleSheet,Text } from "react-native";

const CustomButtons = () => {
  return (
    // <Button
    //   title="Join Now"
    //   color="blue"
    //   onPress={() => Alert.alert("Simple Button pressed")}
    // />

    <TouchableOpacity
      style={styles.button}
      onPress={() => Alert.alert("Simple Button pressed")}
    >
      <Text>Join Now</Text>
    </TouchableOpacity>
  );
};

export default CustomButtons;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 250,
    marginTop: 16,
  },
});
