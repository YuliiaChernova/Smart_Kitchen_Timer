import {
  StyleSheet, Text,
  KeyboardAvoidingView, View,
  TextInput, TouchableOpacity,
  Image
} from 'react-native';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

import { COLORS } from '../variables';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch(error => alert(error.message))
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch(error => alert(error.message))
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
    >
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
          <Text style={[styles.button, styles.buttonSecondary]}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={styles.button}
        >
          <Text style={[styles.button, styles.buttonSecondary]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },
  logoContainer: {
    flex: 2,
  },
  inputContainer: {
    flex: 1.5,
    width: '80%',
    justifyContent: 'flex-end'
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
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonPrimary: {
    backgroundColor: COLORS.BLUE,
    color: COLORS.BACKGROUND,
  },
  buttonSecondary: {
    backgroundColor: COLORS.BACKGROUND,
    color: COLORS.BLUE,
    borderColor: COLORS.BLUE,
    borderWidth: 1,
  }
});