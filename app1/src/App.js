import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Colors, Header } from "react-native/Libraries/NewAppScreen";

const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const wrapperOne = () => {
    return (
      <SafeAreaView style={backgroundStyle}>
        <View
          style={{
            flex: 1,
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title="App 1">
            This screen comes from inside{" "}
            <Text style={styles.highlight}>app1 screens 1</Text> container.
          </Section>
        </View>
      </SafeAreaView>
    );
  };

  const wrapperTwo = () => {
    return (
      <SafeAreaView style={backgroundStyle}>
        <View
          style={{
            flex: 1,
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title="App 1">
            This screen comes from inside
            <Text style={styles.highlight}>app1 screens 2</Text> container.
          </Section>
        </View>
      </SafeAreaView>
    );
  };

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer independent="true">
      <Tab.Navigator initialRouteName="One">
        <Tab.Screen name="One" component={wrapperOne} />
        <Tab.Screen name="Two" component={wrapperTwo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});
