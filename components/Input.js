import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { COLORS } from '../variables';

const Input = ({ value, setValue, ...rest}) => {
  return (
    <TextInput
      value={value}
      onChangeText={text => setValue(text)}
      style={styles.input}
      {...rest}
    />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    borderColor: COLORS.PINK,
    borderWidth: 1,
    color: COLORS.YELLOW,
  },
})