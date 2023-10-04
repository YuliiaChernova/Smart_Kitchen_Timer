import {
  StyleSheet, Text,
  View, TextInput, TouchableOpacity,
  Image
} from 'react-native';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


import { auth } from '../firebase-config';
import authContext from '../context';
import { COLORS, SCREENS } from '../variables';
import Layout from '../components/Layout';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setCurrentUser } = useContext(authContext);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        setCurrentUser(userCredentials.user);
        navigation.replace(SCREENS.HOME, { animation: 'slide_from_bottom' })
      })
      .catch(error => alert(error.message))
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        setCurrentUser(userCredentials.user);
        navigation.replace(SCREENS.HOME, { animation: 'slide_from_bottom' })
      })
      .catch(error => alert(error.message))
  };

  return (
    <Layout>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/main-logo.png')} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          placeholderTextColor={COLORS.GREEN}
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          placeholderTextColor={COLORS.GREEN}
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={[styles.button, styles.buttonPrimary]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.button}
        >
          <Text style={[styles.button, styles.buttonPrimary]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Layout>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  logoContainer: {
    flex: 2.5,
  },
  inputContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: COLORS.PINK,
    borderWidth: 1,
    color: COLORS.YELLOW,
  },
  buttonContainer: {
    flex: 1.5,
    width: '60%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: COLORS.BACKGROUND,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    textAlign: 'center'
  },
  buttonPrimary: {
    backgroundColor: COLORS.BACKGROUND,
    color: COLORS.BLUE,
    borderColor: COLORS.BLUE,
    borderWidth: 1,
  },
});