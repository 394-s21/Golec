import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, onSubmitEditing } from 'react-native';
import results from "../public/results.json"
  

const searchButtonText = "Search"

const searchResults = () =>{
  console.log(results.video.map((item,inx) => (
    item.title
    )))
  return(
  results == undefined ? <Text>{"No result available"}</Text>
  :
  <View>
  { results.video.map((item,inx) => (
    <View key={inx} >
      <Text >{(inx+1)+". "}{item.title}</Text>
    </View>
    ))
  }
  </View>
  )
}

const Search = () => {
  const [value, onChangeText] = useState('');
  console.log(results)
  return (
    <SafeAreaView style={styles.container}>
      <TextInput key = {"searchBox"} 
      onChangeText = {text => onChangeText(text)}
      placeholder = {"Your answer"} 
      value={value}
      placeholderTextColor='#bbb'
      returnKeyType='search'
      autoFocus={true}
      onSubmitEditing={searchResults}
      clearButtonMode="while-editing"
      /> 
 
      {/* <TouchableOpacity  onPress={searchResults}>
        <Text>{searchButtonText}</Text>
      </TouchableOpacity> */}
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

export default Search;