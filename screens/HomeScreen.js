import { StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
    >
      <Text>HomeScreen</Text>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})