import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default ContainerAppOne = (props) => {
  console.log(JSON.stringify(props));
  return (
    <View style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}>
      <TouchableOpacity onPress={() => props.navigation.navigate("AppOne")}>
        <Text style={{ color: "red" }}>LAUNCH APP 1</Text>
      </TouchableOpacity>
    </View>
  );
};
