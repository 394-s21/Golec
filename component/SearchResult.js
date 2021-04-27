import React from 'react';
import {View, Image, TouchableOpacity, Text,Platform, Linking} from 'react-native';
import styles from "../assets/Styles";
import {Html5Entities} from 'html-entities';

const SearchResult = (props) => {
    const RESULTS = props.results 
    console.log(RESULTS)
    const entities = new Html5Entities();

    const intToTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const second = Math.ceil(seconds % 60);
      return `${minutes}:${second}`;
    }

    return (
      <View>
        {RESULTS.map((result, index) => (
          <View key = {index}>
            
            <TouchableOpacity onPress= {() => {
              if(Platform.OS == 'web'){
                window.open(`https://www.youtube.com/watch?v=${result.id}`, '_blank');
              }
            }}>
            <Text style= {styles.courseText}>{entities.decode(result.title)}</Text>
            {/* <Text style={styles.courseText}> {result.description} </Text> */}
            <img src={result.thumbnail} alt=""/>
            </TouchableOpacity>
            {/* <Image key = {index + "Image"} source = {{uri: result.thumbnail}}></Image> */}
            {result.links.map((link, idx) => (
              <Text onPress={() => {
                if (Platform.OS == 'web') {
                  window.open(link, '_blank');
                }
              }}>{intToTime(link.split('=')[1])}</Text>
            ))}
          </View>)
       )}
      </View>
    );
}   
export default SearchResult;