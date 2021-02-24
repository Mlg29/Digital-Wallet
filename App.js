
import React from 'react';
import { 
  StyleSheet
} from 'react-native';

import {createStackNavigator, HeaderTitle} from "@react-navigation/stack"
import {NavigationContainer} from "@react-navigation/native"

import SignUp from "./src/Pages/SignUp"
import Home from "./src/Pages/Home"
import Scan from "./src/Pages/Scan"
import Tabs from "./src/Pages/tab"

export default function App() {

  const Stack = createStackNavigator()


  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }
}
      >
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Scan" component={Scan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create();
