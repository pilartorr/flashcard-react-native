 
import React from 'react'
import { View, StatusBar } from 'react-native'
import Constants from "expo-constants";

import DecksList from './components/DecksList'
import AddDeck from './components/AddDeck'
import DeckDetail from './components/DeckDetail'
import Deck from './components/Deck'

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from './reducers/index'
import middleware from './middleware/index'

import { purple, white } from './utils/colors'

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
    tabBarOptions={{
      activeTintColor: white,
      style: {
        height: 50,
        backgroundColor: purple,
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
    <Tabs.Screen name="Decks" component={DecksList} />
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
      name="DeckDetail"
      component={DeckDetail}
      options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(rootReducer, middleware)}>
        <View style={{ flex: 1 }}>
          <AppStatusBar backgroundColor={purple} barStyle="light-content" />
          <NavigationContainer>
            <MainNav/>
          </NavigationContainer>
        </View>
      </Provider>
    );
  } 
}