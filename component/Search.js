import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Linking, Platform } from 'react-native';
import searchResult from "../public/results.json"
import Result from "./Result"
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
  const [secondarySearchText, setSecondarySearchText] = useState("")
  const [searchTextFinal, setSearchTextFinal] = useState(false)
  const [searchResult, setSearchResult] = useState();

  const GetSearchResult = () => {
    const url = `https://api.golec.christopherkapic.com/search/${searchText}/${secondarySearchText}`
    useEffect(() => {
      const fetchSearchResult = async () => {
        const response = await fetch(url);
        if (!response.ok) throw response;
        const json = await response.json()
        setSearchResult(json);
      }
      fetchSearchResult();
    }, []);
    return  <ShowSearchResult />
    // return  <ShowSearchResult searchResult={searchResult} />
  }
  
  const ShowSearchResult =  () => {
    // var searchResult = await searchAPI(searchText,secondarySearchText)
    console.log(searchResult)
    // console.log(secondarySearchText, searchText)
    return ( 
      <View>{
        searchResult == undefined ? <Text>{"Searching ... "}</Text>
        :
        <View style={styles.contentContainer}>
        {/* <Result data={searchResult[0]} /> */}
        {searchResult.map((item,inx) => (
        <View key={inx} style={styles.result} >
          <Text onPress={() => {
            if(Platform.OS == 'web'){
              window.open(`https://www.youtube.com/watch?v=${item.id}`, '_blank');
          } else {
            Linking.openURL(directionsurl1)
          }
          }} style={styles.titleText}> {(inx+1)+". "}{item.title} </Text>
          <Image
          style={styles.thumbnail}
          key={inx+"Image"}
          source={{uri: item.thumbnail}} />
        </View>
        ))}
        </View>
      }
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput key = {"searchBox"} 
      onChangeText = {text => setSearchText(text)}
      placeholder = {"Search videos"} 
      value={searchText}
      placeholderTextColor='#bbb'
      returnKeyType='search'
      autoFocus={true}
      onSubmitEditing={() => 
        setSearchTextFinal(true)}
      clearButtonMode="while-editing"
      multiline={false}
      style = {styles.formField}
      /> 
      <TextInput key = {"SecondarySearchBox"} 
      onChangeText = {text => setSecondarySearchText(text)}
      placeholder = {"Filter transcripts"} 
      value={secondarySearchText}
      placeholderTextColor='#bbb'
      returnKeyType='search'
      autoFocus={true}
      onSubmitEditing={() => 
        setSearchTextFinal(true)}
        // getSearchResult(searchText, secondarySearchText,setSearchResult)}}
      clearButtonMode="while-editing"
      multiline={false}
      style = {styles.formField}
      /> 
      {/* <Text> {secondarySearchText + "+ " + searchText} </Text> */}
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
          // const fetchSchedule =  async () => {
          //   const response = await fetch(url);
          //   if (!response.ok) throw response;
          //   const json = await response.json();
          //   setSchedule(json);
          // }
          <GetSearchResult/>
        }
        </View>
        </ScrollView>
      }
    </SafeAreaView>
  );
};

export default Search;