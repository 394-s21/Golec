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
  courseButton: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 60,
    padding: 10,
    minWidth: 90,
    maxWidth: 90,
    backgroundColor: '#66b0ff',
  },
  courseText:{
    color: 'black',
    fontSize: 15,
    textAlign: 'center',
  },
  resultsContainer:{
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  eachResult:{
    flexDirection: "column",
  },
  text:{
    marginBottom: 20, 
  }
});

export default Styles;