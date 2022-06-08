import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";
import COLORS from "../../../src/Colors/colors";
import Logo from "../../../assests/images/Logo.png";
import STYLES from "../SetUpPassword/styles";
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import Loader from "../../Components/Loader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ForgotPassword from "../ForgotPassword";
import ModalUp from "../Modal/ModalUp";
import Person from "../../../assests/images/Personal.png";

export default function SetUpPassWord({ navigation }) {
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);
  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    let regec = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$";
    if (!inputs.email) {
      handleError("Please input email", "email");
      valid = false;
    } else if (!inputs.email.match(regec)) {
      handleError("Please input a valid email", "email");
      valid = false;
    }

    let pwCheck = "^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,}$";
    if (!inputs.password) {
      handleError("please input password", "password");
      valid = false;
    } else if (inputs.password < 8) {
      handleError("Min Password length of 8", "password");
      valid = false;
    }

    if (valid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem("user", JSON.stringify(inputs));
      } catch (error) {
        Alert.alert("Error", "Something went wrong");
      }
    }, 3000);
  };

  const handleOnChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const handleError = (errorMessage, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: errorMessage }));
  };

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.white, flex: 1 }}>
      <Loader visible={loading} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 50, paddingHorizontal: 20 }}
      >
        <View style={STYLES.root}>
          <Image source={Logo} style={STYLES.Logo} resizeMode="contain"></Image>
          <View style={STYLES.powered}>
            <Text
              style={{
                fontSize: 12,
                color: "#C4C4C4",
                textAlign: "center",
                paddingTop: 10,
              }}
            >
              Powered by Ecobank Group
            </Text>
          </View>
        </View>
        <Text style={{ color: COLORS.blue, fontSize: 30, paddingBottom: 10 }}>
          Sign In
        </Text>
        <Text
          style={{ color: COLORS.subGrey, fontSize: 15, paddingBottom: 20 }}
        >
          Kindly choose a password that you can remember
        </Text>
        <View style={{ marginVertical: 20, paddingBottom: 50 }}>
          <CustomInput
            label="Email Address"
            onChangeText={(text) => handleOnChange(text, "email")}
            error={errors.email}
            onFocus={() => {
              handleError(null, "email");
            }}
          />
          <Text style={{ color: COLORS.instructBlack }}>
            Should contain one letter, one number and be at least 8 characters
            long
          </Text>
          <CustomInput
            label="Password"
            password
            onChangeText={(text) => handleOnChange(text, "password")}
            error={errors.password}
            onFocus={() => {
              handleError(null, "password");
            }}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text style={{ color: COLORS.subGrey, textAlign: "right" }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          title="Sign In"
          // onPress={validate}
          onPress={() => navigation.navigate("modalScreen")}
        />
        {/* <ModalUp
          imgSource={Person}
          onPress={() => navigation.navigate("SignIn")}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
}
