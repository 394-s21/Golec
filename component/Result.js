import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image, Linking, Platform } from 'react-native';
import searchResult from "../public/results.json"
import styles from "../assets/Styles"
  
const Result = (props) => {
    let links = []
    for (i = 0; i < props.links.length; i++){
        links.push(<Text onPress={() => {
            if(Platform.OS == 'web'){
              window.open(props.links[i], '_blank');
          } else {
            Linking.openURL(directionsurl1) // Not sure what this is.
          }
          }}>Link {i}</Text>)
    }
    return (
        <View>
            <View>
                <Image>
                source={{uri: props.thumbnail}}
                </Image>
                <View>
                    <Text>{ props.title }</Text>
                    <Text>{ props.description }</Text>
                </View>
            </View>
            <View>
                {/* Links? */}
            </View>
        </View>
    )
}

export default Result;