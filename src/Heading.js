import React from "react";
import { StyleSheet, Text, View,FlatList } from "react-native";

const Heading = () => {
  const name = [
    {
      name: "sagar",
    },
    {
      name: "rahul",
    },
    {
      name: "misti",
    },
    {
      name: "amit",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.name}
        data={name}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "white",
    flex:0.5,
  },
});

export default Heading;
