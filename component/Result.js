import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Linking, Platform } from 'react-native';
import searchResult from "../public/results.json"
import styles from "../assets/Styles"
  
const Result = (props) => {
    let links = []
    props.data.links.map((item, idx) => {
        links.push(<Text onPress={() => {
            if (Platform.OS = 'web') {
                window.open(item, '_blank');
            } else {
                Linking.openURL(props.data.links[i]);
            }
        }}>Link {idx}</Text>)
    })
    // for (i = 0; i < props.data.links.length; i++){
    //     links.push(<Text onPress={() => {
    //         if(Platform.OS == 'web'){
    //           window.open(props.data.links[i], '_blank');
    //       } else {
    //         Linking.openURL(props.data.links[i]) // Not sure what this is.
    //       }
    //       }}>Link {i}</Text>)
    // }
    return (
        <View>
            <View>
                <Image>
                source={{uri: props.data.thumbnail}}
                onPress={() => {
                    if (Platform.OS =='web') {
                        window.open(`https://www.youtube.com/watch?v=${props.data.id}`)
                    } else {
                        Linking.openURL(`https://www.youtube.com/watch?v=${props.data.id}`)
                    }
                }}
                </Image>
                <View>
                    <Text>{ props.data.title }</Text>
                    <Text>{ props.data.description }</Text>
                </View>
                {props.data.links.map((link, idx) => (
                    <Text onClick={() => {
                        if (Platform.OS == 'web') {
                        window.open(link);
                        } else {
                        Linking.openURL(link);
                        }
                    }}>{intToTime(parseInt(link.split("=")[1]))}</Text>
                ))}
            </View>
            <View>
                {links.map((item,idx) => {
                    return item;
                })}
            </View>
        </View>
    )
}

export default Result;