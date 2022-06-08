import * as React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

export default function ForgotPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="chevron-back-sharp"
        size={24}
        color="#4385B7"
        onPress={() => navigation.navigate("SignIn")}
      />
      <Text style={styles.paragraph}>Forgot Password</Text>
      <Text style={styles.subtitle}>
        Enter your email to reset your password
      </Text>
      <Text style={styles.headerInput}>Email Address</Text>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="#A0A0A0"
        placeholder="e.g micheal@gmail.com"
      />
      <Text style={styles.resetPW}>Reset Password</Text>
      <Text
        style={styles.goBack}
        onPress={() => navigation.navigate("SignInScreen")}
      >
        Go back
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 90,
  },
  paragraph: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4385B7",
    paddingTop: 80,
  },
  subtitle: {
    color: "#A0A0A0",
    fontSize: 12,
    paddingTop: 10,
  },
  headerInput: {
    paddingTop: 70,
    color: "#A0A0A0",
  },
  textInput: {
    backgroundColor: "#F7F7F7",
    height: 44,
    paddingLeft: 10,
    borderRadius: 4,
  },
  resetPW: {
    color: "#FFFFFF",
    backgroundColor: "#4385B7",
    height: 44,
    textAlign: "center",
    paddingTop: 12,
    borderRadius: 4,
    marginTop: 80,
  },
  goBack: {
    textAlign: "center",
    paddingTop: 10,
    color: "#BED600",
  },
});
