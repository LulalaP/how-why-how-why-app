import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  navigationContainer: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
    padding: 8,
  },
});

const NavigationView = () => (
  <View style={styles.navigationContainer}>
    <Text style={{ margin: 10, fontSize: 15 }}> in the Drawer! </Text>
  </View>
);

export default NavigationView;
