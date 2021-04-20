import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
// import { Link } from "react-router-dom"; 
// FOR SOME REASON THE VIEW I COMMENTED OUT BELOW DOES NOT RENDER ANYTHING SO THIS IS A TRIAL TO SEE 
const SearchResult = (props) => {
    const RESULTS = props.results 
    console.log(RESULTS)
    return ( 
      <div className = "entireQuery">
        {RESULTS.map((result, index) => (
          <div className="query" key = {index}>
            <h1>{ result.title }</h1>
            <h1> { result.description }</h1>
          </div> 
        ))}
      </div>
    );
}   
export default SearchResult;

{/* <View>
            {RESULTS.map((result, index) => (
                <View key={index}>
                  {console.log(result.title)}
                  <h3>{result.title}</h3>
                  <TouchableOpacity onPress={() => {
                        if(Platform.OS == 'web'){
                          window.open(`https://www.youtube.com/watch?v=${result.id}`, '_blank');
                      } else {
                        Linking.openURL(directionsurl1)
                      }
                      }}> 
                    <Image source={result.thumbnail}/>
                    <Text>{result.title}</Text>
                    <Text>{result.description}</Text>
                  </TouchableOpacity>
                </View>
            ))}
    </View>  */}