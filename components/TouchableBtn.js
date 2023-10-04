import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { COLORS } from '../variables';

const TouchableBtn = ({ text, onPressHandler }) => {
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={styles.button}
    >
      <Text style={[styles.button, styles.buttonPrimary]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default TouchableBtn;

const styles = StyleSheet.create({
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
})