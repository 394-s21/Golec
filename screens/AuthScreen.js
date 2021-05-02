import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import results from "../public/results.json"
import Search from "../component/Search"
import styles from "../assets/Styles"
  

const searchScreenTitle = "Golec"

const AuthScreen = ({navigation}) => {
  // console.log("login:", loginType)
  // console.log(results)
  return (
    <SafeAreaView style={styles.container}>
      
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Logo.png')}
      />
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("SearchScreen")}>
        <Text style={[styles.whiteText]}>Back</Text>
      </TouchableOpacity>
       
    </SafeAreaView>
  );
};
  

export default AuthScreen;