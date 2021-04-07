import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Linking } from 'react-native';
import results from "../public/results.json"
  

const searchButtonText = "Search"
const noSearchInput = "no search input"


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
  // useEffect(() => {
  //   if (count > 1) {
  //     document.title = 'Threshold of over 1 reached.';
  //   } else {
  //     document.title = 'No threshold reached.';
  //   }
  // }, [searchTextFinal]);
  return (
    <SafeAreaView style={styles.container}>
      <TextInput key = {"searchBox"} 
      onChangeText = {text => setSearchText(text)}
      placeholder = {"Your answer"} 
      value={searchText}
      placeholderTextColor='#bbb'
      returnKeyType='search'
      autoFocus={true}
      onSubmitEditing={() => setSearchTextFinal(true)}
      clearButtonMode="while-editing"
      multiline={false}
      /> 
      {
        searchTextFinal == false ? <Text> {noSearchInput} </Text>
        :
        <ScrollView contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-between'
        }}>
        <View style={styles.contentContainer}>
        {
          results == undefined ? <Text>{"No result available"}</Text>
          :
          <View style={styles.contentContainer}>
          { results.video.map((item,inx) => (
            <View key={inx} style={styles.result} >
              <Text onPress={() => Linking.openURL(item.url)}> {(inx+1)+". "}{item.title} </Text>
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
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  contentContainer: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 800,
    paddingHorizontal: 20,
    flex: 1,
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
  tinyLogo: {
    width: "30%",
    height: "20%",
  },
  thumbnail: {
    width: "100%",
    height: "80%",
  },
  result:{
    width: "60%",
    height: "70%",
    alignItems: 'center',
    padding: 0,
  },

  courseText:{
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Search;