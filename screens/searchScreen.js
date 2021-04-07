import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import results from "../public/results.json"
import Search from "../component/Search"
  

const searchScreenTitle = "Golec"

const SearchScreen = () => {
  
  console.log(results)
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/logo.png')}
      />
      <Search />
    </SafeAreaView>
  );
};
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  banner: {
    color: '#888',
    fontSize: 32,
  },
  tinyLogo: {
    width: "30%",
    height: "20%",
  },
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  courseButton: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#66b0ff',
  },
  courseText:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default SearchScreen;