import React from "react";
import { FlatList } from "react-native";
import { View, Text ,StyleSheet} from "react-native";



const List = () => {
    const name = [
        {
          name: "sagar",
          key: "1",
        },
        {
          name: "rahul",
          key: "2",
        },
        {
          name: "misti",
          key: "3",
        },
        {
          name: "amit",
          key: "90",
        },
        {
          name: "sagar",
          key: "0",
        },
        {
          name: "rahul",
          key: "7",
        },
        {
          name: "misti",
          key: "8",
        },
        {
          name: "amit",
          key: "99",
        },
      ];

    return (
        <View style={styles.container}>
         <FlatList
        keyExtractor={(item) => item.name}
        data={name}
        horizontal
        renderItem={({ item }) => {
          return <Text style={styles.text}>{item.name}</Text>;
        }}
      />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginTop:90,
    },
    text:{
        color:"white",
        backgroundColor:"blue",
        width:"100px",
        height:40,
        fontSize:40,
        margin:10,
        padding:30,

    }
  });



export default List;