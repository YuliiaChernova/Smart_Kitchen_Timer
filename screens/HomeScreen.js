import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import Layout from '../components/Layout';
import authContext from '../context';
import { COLORS, SCREENS } from '../variables';
import TouchableBtn from '../components/TouchableBtn';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { currentUser } = useContext(authContext);

  const addTimerHandler = () => navigation.push(SCREENS.ADD_TIMER, { animation: 'slide_from_bottom' });

  return (
    <Layout>
      <View style={styles.userContainer}>
        <Text style={styles.text}>{currentUser.uid}</Text>
      </View>
      <ScrollView style={styles.timersContainer}>

      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableBtn text={'Add timer'} onPressHandler={addTimerHandler}/>
      </View>
    </Layout>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  timersContainer: {
  },
  text: {
    color: COLORS.WHITE
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  }
})