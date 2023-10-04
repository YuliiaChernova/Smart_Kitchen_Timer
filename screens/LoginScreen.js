import {
  StyleSheet, View, Image
} from 'react-native';
import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


import { auth } from '../firebase-config';
import authContext from '../context';
import { COLORS, SCREENS } from '../variables';
import Layout from '../components/Layout';
import TouchableBtn from '../components/TouchableBtn';
import Input from '../components/Input';

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
        <Input
          value={email}
          setValue={setEmail}
          placeholder='Email'
          placeholderTextColor={COLORS.GREEN}
        />
        <Input
          value={password}
          setValue={setPassword}
          placeholder='Password'
          placeholderTextColor={COLORS.GREEN}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableBtn text='Login' onPressHandler={handleLogin} />
        <TouchableBtn text='Sign Up' onPressHandler={handleSignUp} />
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
  buttonContainer: {
    flex: 1.5,
    width: '60%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: COLORS.BACKGROUND,
  },
});