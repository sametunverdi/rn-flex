import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.upperSection}>
        <Text>Siz hepiniz ben Terim</Text>
      </View>
      <View style={styles.lowerSection}>
        <View style={styles.boxRow}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
        <View style={styles.boxColumn}>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
          <View style={styles.box}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: '100%',
  },
  upperSection: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerSection: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    margin: 5,
  },
  boxRow: {
    flexDirection: 'row',
  },
  boxColumn: {
    flexDirection: 'column',
  },
});

export default App;