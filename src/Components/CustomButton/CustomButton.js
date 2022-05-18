import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function CustomButton({value, setValue, placeholder, secureTextEntry, navigation }) {
    return (
      <View style={styles.container}>
          <Text style={styles.text}>{placeholder}</Text>
      </View>
    );2
  }


  const styles = StyleSheet.create ({
      container: {
          backgroundColor: '#4385B7',

          width: '100%',
          padding: 15,
          marginVertical: 5,
          alignItems : 'center',
          borderRadius: 4,
          height: 50,
      },

      text: {
        color: '#FFFFFF',
        fontWeight: 'bold',

      },
  })