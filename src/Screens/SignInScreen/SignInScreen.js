import {View, ScrollView, Text, Image, StyleSheet, useWindowDimensions, Button, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assests/images/inhirees.png';
import CustomInput from '../../Components/CustomInput/CustomInput';


export default function SignInScreen( {navigation}) {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    // console.log(height);
    return (
        <SafeAreaView>
        <ScrollView style={styles.root}>
            
          <Image
          source={Logo}
          style={[styles.Logo, {height: height*0.3}]}
          resizeMode="contain"
          />
          <View style={styles.headerBlock}>

          <Text style={styles.header}>We are glad to have you</Text>
          <Text style={styles.subtitle}>Sign in to continue with onboarding</Text>

          </View>
          <Text style={styles.text}> Email Address or Phone</Text>
          <CustomInput
          placeholder='Email Address or Phone'
          value={emailAddress}
          setValue={setEmailAddress}
          />

          <Text style={styles.text}> Password</Text>
          <CustomInput
          placeholder='Password'
          value={password}
          setValue={setPassword}
          secureTextEntry
          />
          <Text style={styles.forgot}>forgot password?</Text>

          <Button style={styles.button} title='Log In' onPress= {() => navigation.navigate('License Agreement')} />

        </ScrollView>
      </SafeAreaView>
    );
  }


  const styles = StyleSheet.create({
      root: {
          // alignItems: 'center',
          paddingTop: 0,
          paddingLeft: 20,
          paddingRight:20,
          paddingBottom: 20,
          backgroundColor: 'white',
      },
      Logo:{
          height: '50%',
          width: "100%",
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 10,
      },
      header:{
          fontSize: 30,
          color: '#4385B7',
      },
      subtitle:{
          color: '#A0A0A0',
          fontSize: 12,
      },
      headerBlock: {
        fontSize: 30,
        color: '#4385B7',
        paddingBottom: 50,
    },
      text: {
        textAlign: 'left',
        fontFamily: 'Roboto',
        fontSize: 13,
        color: '#A0A0A0',
      },
      forgot: { 
          textAlign: 'right',
          color: '#A0A0A0',
          paddingBottom: 75,
      },
      button:{
        height: 50,
        width: '100%',
        borderRadius: 4,

      }
  })
  