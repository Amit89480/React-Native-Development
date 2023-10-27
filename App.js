import { StatusBar } from "expo-status-bar";
import React from "react"; // Import React
import { StyleSheet, Text, View ,Image} from "react-native";
import Heading from "./src/Heading";
import Form from "./src/Form";
import MainPage from "./src/ReactNativePapers/MainPage";
import List from "./src/List";
import Table from "./src/ReactNativePapers/Table"

export default function App() {
  return (
    <View style={styles.container}>
   
      {/* <MainPage/> */}
      {/* <List/> */}
      <Table/>
      <Text>Below is the demo for image</Text>
      {/* <Image source={require('./')} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop:90,
    width: "100%",
  },
});
