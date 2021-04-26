import React from 'react';
import {View, Image, TouchableOpacity, Text,Platform, Linking} from 'react-native';
import styles from "../assets/Styles";
import { Link } from "react-router-dom"; 
const SearchResult = (props) => {
    const RESULTS = props.results 
    console.log(RESULTS)
    return (
      // <View>
      //   {RESULTS.map((result, index) => (
      //     <View key = {index}>
      //         <h6>{result.title}</h6>
      //         <Text>{result.title}</Text>
      //         <Text>{result.description}</Text>
      //         <Link to = {`https://www.youtube.com/watch?v=${result.id}`} target="_blank">
      //           <Image src = {result.thumbnail}></Image>
      //         </Link>
      //     </View>
      //   ))}
      // </View> 
      <View style={styles.resultsContainer}>
        {RESULTS.map((result, index) => (
          <View key = {index} style={styles.eachResult}>
            <Text style= {styles.courseText}>{result.title}</Text>
            {/* <Text style={styles.courseText}> {result.description} </Text> */}
            <Image style={styles.thumbnail} key = {index + "Image"} source = {{uri: result.thumbnail}}></Image>
          </View>)
       )}
      </View>
    //   <View>
    //     {RESULTS.map((result, index) => (
    //         <View key={index}>
    //           {console.log(result.title)}
    //           <Text>{result.title}</Text>
    //           <TouchableOpacity onPress={() => {
    //                 if(Platform.OS == 'web'){
    //                   window.open(`https://www.youtube.com/watch?v=${result.id}`, '_blank');
    //               } else {
    //                 Linking.openURL(directionsurl1)
    //               }
    //               }}> 
    //             <Image source={result.thumbnail}/>
    //             <Text>{result.title}</Text>
    //             <Text>{result.description}</Text>
    //           </TouchableOpacity>
    //         </View>

    //     ))}
    // </View>
      // <div className = "entireQuery">
      //   {RESULTS.map((result, index) => (
      //     <div className="query" key = {index}>
      //       <h6>{ result.title }</h6>
      //       <h6> { result.description }</h6>
      //       <a target="_blank" href={`https://www.youtube.com/watch?v=${result.id}`}>YOUTUBE LINK</a>
      //       <br/>
      //       <br/>
      //     </div> 
      //   ))}
      // </div>
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