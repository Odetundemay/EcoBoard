import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default function CustomInput({value, setValue, placeholder, secureTextEntry}) {
    return (
      <View style={styles.container}>
        <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
      container: {
          backgroundColor: '#F7F7F7',
          width: '100%',

          paddingHorizontal: 10,
          marginVertical: 5,
      },
      input: {
        height:44,
        borderRadius: 4,
      },
  })