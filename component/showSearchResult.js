import {View, Image, TouchableOpacity} from 'react-native';
// import { Link } from "react-router-dom"; 

const showSearchResult = (prop) => {
    const RESULTS = props.results 
    return ( <View>
            {RESULTS.map((result, index) => {
                <View>
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
            })}
    </View> );
}
export default showSearchResult;