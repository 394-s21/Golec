import React, {useState} from 'react';
import {View, Image, TouchableOpacity, Text,Platform, Linking, LayoutAnimation } from 'react-native';
import Styles from "../assets/Styles";
import {decode} from 'html-entities';

const SearchResult = (props) => {
    const [open, setopen] = useState(false);
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
          <View key = {index} >
            
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
              <Image source={result.thumbnail} alt="" style={Styles.tinyLogo}/>
              <Text style={Styles.greenText}>Score: {result.score}</Text>
            </View>
            <View style={Styles.timestamps}>
            <TouchableOpacity style={[Styles.blackText, !open && { height: 40 }]} onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setopen(!open);}} activeOpacity={1}>
              {open == true ? <Text style={Styles.boldText}>Hide mention</Text>
               : <Text style={Styles.boldText}>Show mention</Text>}
              {open && (
                <View>
                  {result.links.map((link, idx) => (
                  <TouchableOpacity key= {idx} onPress={() => {
                    if (Platform.OS == 'web') {
                      window.open(link[0], '_blank');}}}>
                    <Text> {intToTime(link[0].split('=')[1])} - {link[1]}</Text>
                  </TouchableOpacity>
                  ))}
                </View>
              )}
            </TouchableOpacity>
            
            
            </View>
            {/* <Image key = {index + "Image"} source = {{uri: result.thumbnail}}></Image> */}

            

            </View>
          </View>)
       )}
      </View>
    );
}   
export default SearchResult;