import * as React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import TeamUp from "../../../assests/images/editedTeamupSvg.png";
import ProfilePhoto from "../../../assests/images/profilePhoto.png";
import mockUpEdited from "../../../assests/images/mockup.png"

export default function GetStartedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          paddingBottom: 50,
        }}
      >
        <Feather name="menu" size={24} color="black" />
        <Image
          source={ProfilePhoto}
          resizeMode="contain"
          style={{ height: 45.62, width: 45.62 }}
        />
      </View>

      <Image source={TeamUp} resizeMode="contain" style={styles.TeamUpLogo} />
      <Text style={styles.middleText}>We are Glad you are here!</Text>
      <Text style={{ fontSize: 9, textAlign: "center", paddingTop: 20 }}>
        This platform allows you to input your onboarding/post onboarding
        details thank you for choosing Ecobank
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignInScreen")}
        style={{ paddingTop: 30 }}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
      <Image
        source={mockUpEdited}
        resizeMode="contain"
        style={{
          width: "50%",
          height: 250,
          position: "absolute", //Here is the trick
          bottom: 0,
          alignSelf: "flex-end",
          // justifyContent: "space-around",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  TeamUpLogo: {
    height: 151.53,
    width: "100%",
  },
  middleText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "500",
    paddingTop: 20,
  },
  button: {
    backgroundColor: "#4385B7",
    width: "100%",
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 4,
    height: 50,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
  },
});
