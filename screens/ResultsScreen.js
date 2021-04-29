import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import results from "../public/results.json"
import SearchResult from "../component/SearchResult"
import styles from "../assets/Styles"

const searchScreenTitle = "Golec"

const ResultScreen = ({navigation}) => {
  
  // console.log(results)
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Logo.png')}
      />
      <SearchResult />
    </SafeAreaView>
  );
};
  

export default ResultScreen;