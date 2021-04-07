import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import results from "../public/results.json"
import Search from "../component/Search"
import styles from "../assets/Styles"
  

const searchScreenTitle = "Golec"

const SearchScreen = () => {
  
  console.log(results)
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Logo.png')}
      />
      <Search />
    </SafeAreaView>
  );
};
  

export default SearchScreen;