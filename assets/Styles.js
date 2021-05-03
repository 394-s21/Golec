import {StyleSheet} from "react-native"

const Styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    width: "100%",
    height: "100%",
  },
  banner: {
    color: '#888',
    fontSize: 32,
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
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Helvetic, Sans-Serif'
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
    fontWeight: 'bold' 
  },
  blackText:{
    color: 'black',
    ...baseText,
  },
  titleText:{
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
  },
  boldText:{
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
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
  videoAndText:{
    flexDirection: "row",
    justifyContent: "center"
  },
  timestamps:{
    flexDirection: "column",
    justifyContent: "center"
  }
  
});

const baseText = {
  fontSize: 15,
  textAlign: 'center',
  fontFamily: 'Helvetica',
}

export default Styles;