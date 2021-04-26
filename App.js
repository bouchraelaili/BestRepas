import React, {useState} from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import Home from './NavigationTab/Home'
import Menu from './NavigationTab/Menu'
import Panier from './NavigationTab/Cart'
import { AntDesign } from '@expo/vector-icons';






 function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Home/>
    </View>
  );
}

function MenuScreen() {
  return (
    <View>
      <Menu/>
    </View>
  );
}

function PanierScreen() {
  return (
    <View>
      <Panier/>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {


  return (
    <NavigationContainer >
    <Tab.Navigator
     tabBarOptions={{
      labelStyle: { fontSize: 16,marginBottom:15,color:'white' },
      tabStyle: { width: 100 },
      style: { backgroundColor: 'rgb(36, 68, 92)' },
    }}
    >
      <Tab.Screen
      name="Home"   component={HomeScreen}    />
       <Tab.Screen
        name="restaurant-menu" component={MenuScreen} />

<Tab.Screen
     
          
   name="Cart" component={PanierScreen} />
     
    </Tab.Navigator>
  </NavigationContainer>




  );
}

const styles = StyleSheet.create({
 

});
