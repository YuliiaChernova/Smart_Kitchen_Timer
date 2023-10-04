import React from 'react';
import { KeyboardAvoidingView, StyleSheet, StatusBar } from 'react-native';

import { COLORS } from '../variables';

const Layout = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior='padding'
    >
      <StatusBar barStyle='light-content' backgroundColor={COLORS.BACKGROUND} />
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },
});

export default Layout;