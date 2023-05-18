import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { ScreenShieldView } from 'react-native-screen-shield';

export default function App() {
  return (
    <ScreenShieldView style={styles.container}>
      <View style={styles.box} />
    </ScreenShieldView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
    backgroundColor: '#bbf',
  },
});
