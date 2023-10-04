import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Input from '../components/Input';
import { COLORS } from '../variables';
import TouchableBtn from '../components/TouchableBtn';

const AddTimerScreen = () => {

  const [currentInterval, setCurrentInterval] = useState(undefined);
  const [intervals, setIntervals] = useState([]);

  const onAddInterval = (currentInterval) => setIntervals(intervals => [...intervals, currentInterval])
  return (
    <Layout>
      <View>
        <Text style={styles.text}>Add {!intervals.length ? 'first' : 'next'} interval</Text>
      </View>
      <Input
        value={currentInterval}
        setValue={setCurrentInterval}
        keyboardType='numeric'
      />
      <TouchableBtn text='Add' onPressHandler={onAddInterval}/>
      <View>
      {intervals.map(int => <Text>{int} minutes</Text>)}
      </View>
    </Layout>
  )
}

export default AddTimerScreen

const styles = StyleSheet.create({
  text: {
    color: COLORS.WHITE
  }
})