import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CustomInput from "../../Components/CustomInput/CustomInput";
// import { button } from "../../src/Components/styles/Styles";
import RadioGroup from "react-native-radio-buttons-group";
import DropDown from "../../../assests/images/DropDown.png";

let maritalStatus = [
  { id: 1, name: "Single" },
  { id: 2, name: "Married" },
  { id: 3, name: "Seperated" },
  { id: 4, name: "Widow(er)" },
  { id: 5, name: "Divorced" },
];
const radioButtonsData = [
  {
    id: "1",
    label: "Yes",
    value: "option1",
  },
  {
    id: "2",
    label: "No",
    value: "option2",
  },
];

export default function PersonalHistory({ navigation }) {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  // const [maritalStatus, setMaritalStatus] = useState([]);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }
  return (
    <View style={{ padding: 20, flex: 1 }}>
      <View style={{ flexDirection: "row", paddingTop: 40 }}>
        <Ionicons
          name="chevron-back-sharp"
          size={24}
          color="#4385B7"
          onPress={() => navigation.navigate("LicenseAgreement")}
        />
        <Text style={{ fontSize: 20, color: "#23557F", paddingLeft: 90 }}>
          Personal Details
        </Text>
      </View>

      <Text style={{ color: "#A0A0A0", paddingTop: 50 }}>
        Please kindly fill this document. Signing where required
      </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        bounces={false}
      >
        <Text style={{ paddingTop: 30, color: "#1E1E1E", paddingBottom: 10 }}>
          Family Name (e.g., ADEKOLA)
        </Text>
        <CustomInput />
        <Text style={{ paddingTop: 20, color: "#1E1E1E", paddingBottom: 10 }}>
          Full Name (e.g., VICTOR MICHEAL )
        </Text>
        <CustomInput />
        <Text style={{ paddingTop: 20, color: "#1E1E1E", paddingBottom: 10 }}>
          Maiden Names
        </Text>
        <CustomInput />
        <Text
          style={{
            paddingTop: 20,
            color: "#1E1E1E",
            paddingBottom: 10,
          }}
        >
          Date of Birth (Format: DD-MMM-YYYY)
        </Text>
        <Text
          style={{
            paddingTop: 20,
            color: "#1E1E1E",
            paddingBottom: 10,
          }}
        >
          Place of Birth
        </Text>
        <CustomInput />
        <Text
          style={{
            paddingTop: 20,
            color: "#1E1E1E",
            paddingBottom: 10,
          }}
        >
          Nationality at Birth
        </Text>
        <CustomInput />
        <Text
          style={{
            paddingTop: 20,
            color: "#1E1E1E",
            paddingBottom: 10,
          }}
        >
          Present Nationality
        </Text>
        <CustomInput />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text
              style={{
                paddingTop: 20,
                color: "#1E1E1E",
                paddingBottom: 10,
              }}
            >
              Sex
            </Text>

            <RadioGroup
              layout="row"
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              color="#F7F7F7"
            />
          </View>

          <View style={{ paddingRight: 20 }}>
            <Text
              style={{
                paddingTop: 20,
                color: "#1E1E1E",
                paddingBottom: 10,
              }}
            >
              Height
            </Text>
            <TextInput
              style={{ height: 44, width: 54, backgroundColor: "#EDEDED" }}
            ></TextInput>
          </View>
          <View>
            <Text
              style={{
                paddingTop: 20,
                color: "#1E1E1E",
                paddingBottom: 10,
              }}
            >
              Weight
            </Text>
            <TextInput
              style={{ height: 44, width: 54, backgroundColor: "#EDEDED" }}
            ></TextInput>
          </View>
        </View>
        <Text>Marital Status</Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Text
            style={{
              backgroundColor: "#F7F7F7",
              padding: 8,
              borderRadius: 4,
              minHeight: 44,
              width: 164,
              justifyContent: "center",
            }}
          >
            Married
          </Text>
        </TouchableOpacity>
        <View>
        </View>
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate("PersonalHistory")}>
        <View style={button.primary}>
          <Text style={button.Text}>Save</Text>
          <Image source={DropDown} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
