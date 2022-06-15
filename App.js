import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./Views/Screens/SignInScreen/SignInScreen";
// import LicenseAgreement from './src/Views/Screens/LicenseAgreement';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SetUpPassWord from "./Views/Screens/SetUpPassword/SetUpPassword";
import Loader from "./Views/Components/Loader";
import ModalUp from "./Views/Screens/Modal/Modal1/ModalUp";

import HomeScreen from "./Views/Screens/HomeScreen/HomeScreen";
import ForgotPassword from "./Views/Screens/ForgotPassword";

console.reportErrorsAsExceptions = false;

const Stack = createNativeStackNavigator();

export default function App() {
  // const [initialRouteName, setInitialRouteName] = React.useState("");

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     authUser();
  //   }, 2000);
  // }, []);

  // const authUser = async () => {
  //   try {
  //     let userData = await AsyncStorage.getItem("userData");
  //     if (userData) {
  //       userData = JSON.parse(userData);
  //       if (userData.loggedIn) {
  //         setInitialRouteName("HomeScreen");
  //       } else {
  //         setInitialRouteName("LoginScreen");
  //       }
  //     } else {
  //       setInitialRouteName("RegistrationScreen");
  //     }
  //   } catch (error) {
  //     setInitialRouteName("RegistrationScreen");
  //   }
  // };
  return (
    <NavigationContainer>
      {/* {!initialRouteName ? (
        <Loader visible={false} />
      ) : ( */}
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        // initialRouteName="SetUp"
      >
        {/* <Stack.Screen name="SetUp" component={SetUpPassWord} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="SignIn" component={SignInScreen} /> */} 
        {/* <Stack.Screen name="modalScreen" component={ModalUp} /> */}
        {/* <Stack.Screen name='License Agreement' component={LicenseAgreement}/> */}
        {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
      </Stack.Navigator>
      {/* )} */}
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#fff",
//   },
// });
