import React from 'react';
import {View, Image, TouchableOpacity, Text,Platform, Linking} from 'react-native';
import styles from "../assets/Styles";
const SearchResult = (props) => {
    const RESULTS = props.results 
    console.log(RESULTS)
    return (
      <View>
        {RESULTS.map((result, index) => (
          <View key = {index}>
            
            <TouchableOpacity onPress= {() => {
              if(Platform.OS == 'web'){
                window.open(`https://www.youtube.com/watch?v=${result.id}`, '_blank');
              }
            }}>
            <Text style= {styles.courseText}>{result.title}</Text>
            {/* <Text style={styles.courseText}> {result.description} </Text> */}
            <img src={result.thumbnail} alt=""/>
            </TouchableOpacity>
            {/* <Image key = {index + "Image"} source = {{uri: result.thumbnail}}></Image> */}
          </View>)
       )}
      </View>
    );
}   
export default SearchResult;