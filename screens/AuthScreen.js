import React, {useState} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import results from "../public/results.json"
import Search from "../component/Search"
import Form from "../component/Form"
import styles from "../assets/Styles"
import { firebase } from '../component/firebase';
import * as Yup from 'yup';

const searchScreenTitle = "Golec"


const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Please enter a valid email')
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .min(6, 'Password must have at least 6 characters')
    .label('Password'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Confirmation password must match password'),
});

const AuthScreen = ({navigation}) => {
  // console.log("login:", loginType)
  // console.log(results)

  const [signInError, setSignInError] = useState('');


  async function handleOnLogin(values) {
      const { email, password } = values;
      setSignInError(null);
      try {
          await firebase.auth().signInWithEmailAndPassword(email, password);
          navigation.navigate('SchedulerScreen');
      } catch (error) {
        setSignInError(error.message);
      }
    }

  async function handleOnSignUp(values) {
    const { name, email, password } = values;
    setSignInError(null);
    try {
      const authCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);;
      const user = authCredential.user;
      await user.updateProfile({displayName: name});
      navigation.navigate('SchedulerScreen');
    } catch (error) {
      setSignInError(error.message);
    }
  }

  async function handleOnSubmit(values) {
    return values.confirm ? handleOnSignUp(values) : handleOnLogin(values);
  }


  return (
    <SafeAreaView style={styles.container}>
      
      <Image
        style={styles.tinyLogo}
        source={require('../assets/Logo.png')}
      />


<ScrollView>
          <Form
            initialValues={{
              email: '',
              password: '',
              confirm: '',
            }}
            validationSchema={validationSchema}
            onSubmit={handleOnSubmit}
          >
            <Form.Field
              name="email"
              leftIcon="email"
              placeholder="Enter email"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <Form.Field
              name="password"
              leftIcon="lock"
              placeholder="Enter password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
            />
            <Form.Field
              name="confirmPassword"
              leftIcon="lock"
              placeholder="Confirm password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
            />
            <Form.Button style={styles.backButton} title={values => values.confirm ? 'Register' : 'Login'} />
            {<Form.ErrorMessage error={signInError} visible={true} />}
          </Form>
        </ScrollView>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("SearchScreen")}>
        <Text style={[styles.whiteText]}>Back</Text>
      </TouchableOpacity>
       
    </SafeAreaView>
  );
};
  

export default AuthScreen;