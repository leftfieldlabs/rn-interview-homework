import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native'
import Contacts from './Contacts'

export default () => (
  <NativeRouter>
    <View style={styles.container}>
      <Route exact path="/" component={Contacts} />
      <Route path="/contact/:id" component={Contact} />
    </View>
  </NativeRouter>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
