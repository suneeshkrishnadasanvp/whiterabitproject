import React from 'react';
import {View, SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native';
import {Colors} from '../../styles';
const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.splash}>
        <ActivityIndicator size="large" />
      </View>
    </SafeAreaView>
  );
};
export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.TIRTIARY_BACKGROUND,
  },
  splash: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
