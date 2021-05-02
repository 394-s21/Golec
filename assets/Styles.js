import {StyleSheet} from "react-native"

const Styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    
    width: "100%",
    height: "100%",
    

  },
  banner: {
    color: '#888',
    fontSize: 32,
  },
  titleText:{
    fontWeight: 'bold'
  },
  formField: {
    borderWidth: 1,
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
    borderColor: '#888888',
    fontSize: 18,
    height: 50,
    outlineStyle: 'none'
  },
  tinyLogo: {
    width: 314,
    height: 160,
    paddingTop: 20,
    marginTop: 10,
  },
  contentContainer: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 800,
    paddingHorizontal: 20,
    flex: 1,
  },
  thumbnail: {
    width: "100%",
    resizeMode: "contain",
  },
  result:{
    width: "60%",
    height: "70%",
    alignItems: 'center',
    padding: 0,
  },
  load:{
    paddingTop: '20px',
    fontSize: 30,
    textAlign: 'center',
  },
  courseButton: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#3DC47D',
  },
  greenText:{
    ...baseText,
    color: '#3DC47D', 
  },
  blackText:{
    color: 'black',
    ...baseText,
    
  },
  whiteText:{
    color: 'white',
    ...baseText,
  },
  resultsContainer:{
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  SearchResult:{
    flexDirection: "column",
  },
  text:{
    marginBottom: 20, 
  },
  button:{
    alignSelf: 'flex-end',
    marginTop: 0,
    marginRight: "5%",
    borderRadius: 5,
    margin: 10,
    height: 30,
    padding: 10,
    minWidth: 30,
    maxWidth: 90,
    backgroundColor: '#3DC47D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: "5%",
  },
  backButton:{
    marginTop: 0,
    marginRight: "5%",
    borderRadius: 5,
    margin: 10,
    height: 30,
    padding: 10,
    minWidth: 30,
    maxWidth: 90,
    backgroundColor: '#3DC47D',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

const baseText = {
  fontSize: 15,
  textAlign: 'center',
 
  
}

export default Styles;