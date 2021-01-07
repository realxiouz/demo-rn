import React from "react"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomePage from "../pages/home/index"
import MePage from "../pages/me/index"
import SplashPage from "../pages/splash/index"
import DebugPage from "../pages/debug/index";
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage}></Tab.Screen>
      <Tab.Screen name="Me" component={MePage}></Tab.Screen>
    </Tab.Navigator>
  )
}


export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={SplashPage} ></Stack.Screen>
        <Stack.Screen name="Debug" component={DebugPage}></Stack.Screen>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}