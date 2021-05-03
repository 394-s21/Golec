import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import results from "../public/results.json"
import Search from "../component/Search"
import styles from "../assets/Styles"
  

const searchScreenTitle = "Golec"

const SearchScreen = ({navigation}) => {
  const [loginType, setLoginType] = useState("")

  // console.log(results)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => {
        setLoginType("Login")
        console.log("Before pass: ", loginType)
        navigation.navigate("AuthScreen",{loginType : "check"})}}>
        <Text style={[styles.whiteText]}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {
        setLoginType("Signup")
        navigation.navigate("AuthScreen",loginType)}}>
        <Text style={[styles.whiteText]}>Signup</Text>
      </TouchableOpacity>
      </View>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Logo.png')}
      />
      {/* <Search navigation = {navigation}/>
       */}
       <Search/>
    </SafeAreaView>
  );
};
  

export default SearchScreen;