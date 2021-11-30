import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ContainerAppOne from "../ContainerAppOne";
import AppOne from "../AppOne";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator defaultScreenOptions={"ContainerAppOne"}>
      <HomeStack.Screen name="ContainerAppOne" component={ContainerAppOne} />
      <HomeStack.Screen name="AppOne" component={AppOne} />
    </HomeStack.Navigator>
  );
}

export default HomeStackScreen;
