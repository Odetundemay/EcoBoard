import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import React from "react";
import Logo from "../../../assests/images/inhirees.png";

export default function SignInScreen() {
  // const height = useWindowDimensions();
  return (
    <SafeAreaView style={styles.root}>
      <Image
        source={Logo}
        // style={[styles.Logo, { height: height * 0.3 }]}
        // resizeMode="contain"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // root: {
  //   flex: 1,
  //   padding: 10,
  // },
  // Logo: {
  //   width: "100%",
  //   height: '30%',
  //   alignItems: 'center',
  // },
});
