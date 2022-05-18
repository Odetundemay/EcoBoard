import { useState } from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/Screens/SignInScreen';
import LicenseAgreement from './src/Screens/LicenseAgreement';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  useState();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log in">
        <Stack.Screen name='Log in' component={SignInScreen}/>
        <Stack.Screen name='License Agreement' component={LicenseAgreement}/>
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   {/* <SignInScreen/> */}
    //   <LicenseAgreement/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


