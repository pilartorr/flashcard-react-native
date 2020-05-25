 
import React from 'react'
import { View, Platform, StatusBar } from 'react-native'
import Constants from "expo-constants";

import DecksList from './components/DecksList'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { purple, white } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'

function AppStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = createMaterialTopTabNavigator();

const TabNav = () => (
  <Tabs.Navigator
    initialRouteName="DecksList"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        if (route.name === "DecksList") {
          <Ionicons name="ios-bookmarks" size={size} color={color} />
        } else if (route.name === "Add Deck") {
          <FontAwesome name="plus-square" size={size} color={color} />
        } 
      }
    })}
    tabBarOptions={{
      activeTintColor: Platform.OS === "ios" ? purple : white,
      style: {
        height: 50,
        backgroundColor: Platform.OS === "ios" ? white : purple,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }}
  >
    <Tabs.Screen name="DecksList" component={DecksList} />
    <Tabs.Screen name="Add Deck" component={AddDeck} />
  </Tabs.Navigator>
)

const Stack = createStackNavigator();
const MainNav = () => (
  <Stack.Navigator headerMode="screen">
      <Stack.Screen
          name="Home"
          component={TabNav}
          options={{headerShown: false}}/>
      <Stack.Screen
          name="Deck"
          component={Deck}
          options={{
              headerTintColor: white, headerStyle: {
                  backgroundColor: purple,
              }
          }}/>
  </Stack.Navigator>
);

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={purple} barStyle="light-content" />
        <NavigationContainer>
          <MainNav/>
        </NavigationContainer>
      </View>
    );
  } 
}