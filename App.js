import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import results from "./public/results.json"
import styles from "./assets/Styles"
import SearchScreen from "./screens/SearchScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  // console.log(results)
  return (
    <NavigationContainer>
    {/* Hide navigator header */}
    <Stack.Navigator screenOptions={{headerShown: false}}> 
      <Stack.Screen name="SearchScreen"
        component={SearchScreen}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
};
  
export default App;