import React, {useState} from 'react';
import {View, ScrollView, Image, TouchableOpacity, Text,Platform, Linking, LayoutAnimation, TouchableHighlight } from 'react-native';
import Styles from "../assets/Styles";
import {decode} from 'html-entities';

const padSeconds = (num) => {
    let to_return = num.toString();
    if (to_return.length < 2) {
      to_return = '0' + to_return;
    }
    return to_return;
  }

  const intToTime = (seconds) => {
    const hours = Math.floor(seconds/3600)
    const minutes = Math.floor(seconds/60 % 60);
    const second = Math.ceil(seconds % 60);

    let ret = `${hours}:${padSeconds(minutes)}:${padSeconds(second)}`

    if (hours ==0){
        ret = `${minutes}:${padSeconds(second)}`
    }

    return ret;
  }



const Transcript = ({links}) =>{
    const [open, setOpen] = useState(false);

    return (

        <TouchableOpacity style={[Styles.blackText, !open && { height: 40 }]} onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              setOpen(!open);}} activeOpacity={1}>
              {open == true ? <Text style={Styles.boldText}>Hide mentions</Text>
               : <Text style={Styles.boldText}>Show mentions</Text>}
              {open && (
                <ScrollView style={Styles.scrollResult}>
                  {links.map((link, idx) => (
                  <TouchableOpacity key= {idx} onPress={() => {
                    if (Platform.OS == 'web') {
                      window.open(link[0], '_blank');}}}>
                    <Text style={Styles.blueText}> {intToTime(link[0].split('=')[1])} - {decode(link[1])}</Text>
                  </TouchableOpacity>
                  ))}
                </ScrollView>
              )}
            </TouchableOpacity>
    )


} 


export default Transcript;