import React from 'react';
import {View, Image, TouchableOpacity, Text,Platform, Linking} from 'react-native';
import Styles from "../assets/Styles";
import {decode} from 'html-entities';

const SearchResult = (props) => {
    const RESULTS = props.results 
    console.log(RESULTS)

    const padSeconds = (num) => {
      let to_return = num.toString();
      if (to_return.length < 2) {
        to_return = '0' + to_return;
      }
      return to_return;
    }

    const intToTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const second = Math.ceil(seconds % 60);
      return `${minutes}:${padSeconds(second)}`;
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
            <Text style = {Styles.blackText}>{decode(result.title)}</Text>
            {/* <Text style={Styles.courseText}> {result.description} </Text> */}
            <img src={result.thumbnail} alt=""/>
            </TouchableOpacity>
            {/* <Image key = {index + "Image"} source = {{uri: result.thumbnail}}></Image> */}
            {result.links.map((link, idx) => (
              <TouchableOpacity onPress={() => {
                if (Platform.OS == 'web') {
                  window.open(link[0], '_blank');}}}>
                <Text> {intToTime(link[0].split('=')[1])} - {link[1]}</Text>
              </TouchableOpacity>
            ))}
            <Text style={Styles.greenText}>Score: {result.score}</Text>
          </View>)
       )}
      </View>
    );
}   
export default SearchResult;