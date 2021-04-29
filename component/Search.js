import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Linking, Platform } from 'react-native';
import Styles from '../assets/Styles';
import SearchResult from "./SearchResult"; 

const searchButtonText = "Search"
const noSearchInput = " "


const Search = () => {
  const [data, setData] = useState(""); 
  const [searchText, setSearchText] = useState("")
  const [secondarySearchText, setSecondarySearchText] = useState("")

  const getSearchResult = (url) => {
    fetch(url)
    .then(res => {
        if(!res.ok){
            throw Error('Could not fetch the data for that resource...')
        }
        return res.json()
    })
    .then((data) => {
        setData(data);
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
}
  return (
    <SafeAreaView style={Styles.container}>
      <TextInput key = {"searchBox"} 
      onChangeText = {text => setSearchText(text)}
      placeholder = {"Search videos"} 
      value={searchText}
      placeholderTextColor='#bbb'
      returnKeyType='search'
      autoFocus={true}
      onSubmitEditing={() => getSearchResult(`https://api.golec.christopherkapic.com/search/${searchText}/${secondarySearchText}`)}
      clearButtonMode="while-editing"
      multiline={false}
      style = {Styles.formField}
      /> 
      <TextInput key = {"SecondarySearchBox"} 
      onChangeText = {text => setSecondarySearchText(text)}
      placeholder = {"Filter transcripts"} 
      value={secondarySearchText}
      placeholderTextColor='#bbb'
      returnKeyType='search'
      autoFocus={true}
      onSubmitEditing={() => getSearchResult(`https://api.golec.christopherkapic.com/search/${searchText}/${secondarySearchText}`)}
      clearButtonMode="while-editing"
      multiline={false}
      style = {Styles.formField}
      /> 
      <TouchableOpacity style = {Styles.courseButton}
        onPress={() => getSearchResult(`https://api.golec.christopherkapic.com/search/${searchText}/${secondarySearchText}`)}>
          <Text style={Styles.whiteText}>
            {'Submit'}
          </Text>      
          {/* <View style = {Styles.container}>
            <Image
              source={require('../assets/white-search.png')}
              style={{heigh:150, width: 150}}>
            </Image>  
          </View>  */}
      </TouchableOpacity>
      <ScrollView>
        {!!data && <SearchResult results = {data}/>}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;