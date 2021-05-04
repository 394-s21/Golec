import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text,Platform, Linking, LayoutAnimation, TouchableHighlight } from 'react-native';
import Styles from "../assets/Styles";
import {decode} from 'html-entities';
import Transcript from "./Transcript"

const SearchResult = (props) => {
    const RESULTS = props.results 
    // console.log(RESULTS)


    return (
      <View>
        {RESULTS.map((result, index) => (
          <View key = {index} style={Styles.margin}>
            
            <View>
              <TouchableOpacity onPress= {() => {
                if(Platform.OS == 'web'){
                  window.open(`https://www.youtube.com/watch?v=${result.id}`, '_blank');
                }
              }}>
            
              <Text style = {Styles.titleText}>{decode(result.title)}</Text>
            </TouchableOpacity>
            </View>

            <View style = {Styles.videoAndText}>
            {/* <Text style={Styles.courseText}> {result.description} </Text> */}
            <View style={Styles.timestamps}>
              <TouchableHighlight onPress= {() => {
                if(Platform.OS == 'web'){
                  window.open(`https://www.youtube.com/watch?v=${result.id}`, '_blank');
                }
              }}>
                <Image source={result.thumbnail} alt="" style={Styles.tinyLogo}/>
              </TouchableHighlight>
              <Text style={Styles.greenText}>GoLec Score: {result.score}</Text>
            </View>
            <View style={Styles.timestamps}>
                
                <Transcript links = {result.links}/>
            
            </View>

            

            </View>
          </View>)
       )}
      </View>
    );
}   
export default SearchResult;