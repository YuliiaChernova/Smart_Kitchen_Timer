import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

import Layout from '../components/Layout';
import authContext from '../context';
import { COLORS } from '../variables';

const HomeScreen = () => {

  const { currentUser } = useContext(authContext);

  return (
    <Layout>
      <View style={styles.screenHeader}>
        <Text style={styles.text}>{currentUser.uid}</Text>
      </View>
      <ScrollView style={styles.timersContainer}>

      </ScrollView>
    </Layout>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screenHeader: {
    flex: 1,
    justifyContent: 'center',
  },
  timersContainer: {
    flex: 4,
  },
  text: {
    color: COLORS.WHITE
  }
})