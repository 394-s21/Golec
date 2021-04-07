import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Linking, Platform } from 'react-native';
import results from "../public/results.json"
import styles from "../assets/Styles"
  

const searchButtonText = "Search"
const noSearchInput = " "


const searchResults = () =>{
  console.log(results.video.map((item,inx) => (
    item.title
    )))
  return(
    <ScrollView >
      <View>
    {
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
    }
    </View>
    </ScrollView>
  )  
}

const Search = () => {
  const [searchText, setSearchText] = useState("")
  const [searchTextFinal, setSearchTextFinal] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <TextInput key = {"searchBox"} 
      onChangeText = {text => setSearchText(text)}
      placeholder = {"Search input"} 
      value={searchText}
      placeholderTextColor='#bbb'
      returnKeyType='search'
      autoFocus={true}
      onSubmitEditing={() => setSearchTextFinal(true)}
      clearButtonMode="while-editing"
      multiline={false}
      style = {styles.formField}
      /> 
      {
        searchTextFinal == false ? <Text> {noSearchInput} </Text>
        :
        <ScrollView contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-between',
          width: "100%",
          padding: 10,
        }}>
        <View style={styles.contentContainer}>
        {
          results == undefined ? <Text>{"No result available"}</Text>
          :
          <View style={styles.contentContainer}>
          { results.video.map((item,inx) => (
            <View key={inx} style={styles.result} >
              <Text onPress={() => {
                if(Platform.OS == 'web'){
                  window.open(item.url, '_blank');
              } else {
                Linking.openURL(directionsurl1)
              }
              }} style={styles.titleText}> {(inx+1)+". "}{item.title} </Text>
              <Image
              style={styles.thumbnail}
              key={inx+"Image"}
              source={{uri: item.thumbnail}} />
            </View>
            ))
          }
          </View>
        }
        </View>
        </ScrollView>
      }
    </SafeAreaView>
  );
};

export default Search;