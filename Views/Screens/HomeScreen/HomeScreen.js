import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import COLORS from "../../../src/Colors/colors";
import STYLES from "../SetUpPassword/styles";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
// import CircularProgress from "react-native-circular-progress-indicator";
import * as ImagePicker from "expo-image-picker";

import Profile from "../../../assests/images/profilePhoto.png";
import Congrats from "../../../assests/images/Congrats.png";
import EcobankLogo from "../../../assests/images/EcobankLogo.png";
import RocketLogo from "../../../assests/images/RocketIcon.png";
import DATA from "../../../src/data/data";

const data = [
  {
    title: "React Native",
    subHeader:
      "input the details for your personal details, \naddress and employee history ",
    description: "JS framework",
  },
  {
    title: "React ",
    subHeader: "Input your Deatails",
    description: "JS framework",
  },
];
export default function HomeScreen() {
  const [value, setValue] = useState();
  const renderItem = ({ item }) => <DATA item={item} />;
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    };
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  if (hasGalleryPermission === false) {
    return <Text>No access to Internal Storage</Text>;
  }
  return (
    <SafeAreaView
      style={{ backgroundColor: COLORS.white, flex: 1, paddingTop: 50 }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 10, paddingHorizontal: 20 }}
      >
        <View style={{ flexDirection: "row" }}>
          <Feather name="menu" size={24} color="#6C63FF" />
          <View
            style={{
              flexDirection: "column",
              marginLeft: 50,
              marginRight: 50,
            }}
          >
            <Text style={{ color: "#141414", fontSize: 18 }}>
              Welcome John Doe
            </Text>
            <Text style={{ paddingTop: 10, color: "#D6D5D5", fontSize: 10 }}>
              JohnDoe@yahoo.com
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "red",
              width: 45,
              height: 45,
              borderRadius: 45 / 2,
              alignContent: "flex-end",
              alignItems: "flex-end",
              alignSelf: "flex-end",
            }}
          >
            <TouchableOpacity
              onPress={() => pickImage()}
              style={{
                width: 45,
                height: 45,
                borderRadius: 45 / 2,
                alignContent: "flex-end",
                alignItems: "flex-end",
                alignSelf: "flex-end",
              }}
            >
              {image && (
                <Image
                  source={{ uri: image }}
                  style={{
                    height: 45,
                    width: 45,
                    borderRadius: 45 / 2,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            paddingTop: 40,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            source={Congrats}
            resizeMode="contain"
            style={{ height: 50, width: 50 }}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              paddingLeft: 10,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Congratulations!
            </Text>
            <Text
              style={{
                paddingTop: 10,
                color: "#8D8D8D",
                textAlign: "center",
                fontSize: 10,
              }}
            >
              Your Onboarding is
              <Text style={{ color: COLORS.blue }}> 10% complete</Text>
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                backgroundColor: "#9FC4E1",
                marginTop: 10,
                paddingTop: 5,
                alignSelf: "center",
                padding: 10,
                flex: 1,
                paddingBottom: 5,
                borderRadius: 4,
              }}
            >
              <AntDesign name="play" size={20} color="#BED600" />
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: 10,
                  marginTop: 5,
                }}
              >
                Meet your Team
              </Text>
            </View>
          </View>
        </View>

        {/* //Id Card */}
        <View
          style={{
            marginTop: 30,
            backgroundColor: "#3F81B4",
            paddingBottom: 20,
            paddingRight: 15,
            paddingLeft: 15,
          }}
        >
          <View
            style={{
              marginTop: 20,
              color: COLORS.white,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: COLORS.white }}>Name: </Text>
              <Text style={{ marginTop: 10, color: COLORS.white }}>
                Surname:{" "}
              </Text>
              <Text style={{ marginTop: 10, color: COLORS.white }}>
                Staff Number
              </Text>
              <Text style={{ marginTop: 10, color: COLORS.white }}>
                Signature:{" "}
              </Text>
            </View>
            <View
              style={{
                width: 118,
                height: 118,
                backgroundColor: "#FFFFFF",
                borderWidth: 1,
                borderColor: "#B9D318",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name="file-image-o" size={30} color="#EFEFEF" />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "#9FC4E1",
                width: 150,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
                paddingTop: 5,
                paddingBottom: 5,
                borderRadius: 4,
              }}
            >
              <MaterialIcons
                name="error-outline"
                size={10}
                color="white"
                style={{ marginRight: 5 }}
              />
              <Text style={{ color: "#FCFCFC", fontSize: 8 }}>
                This is just a sample of your id
              </Text>
            </View>
            <Image source={EcobankLogo} style={{ width: 35, height: 17 }} />
          </View>
        </View>

        {/* Togle  */}
        <View
          style={{
            backgroundColor: "#F8F8F8",
            marginTop: 30,
            flexDirection: "row",
            borderRadius: 4,
            height: 59,
          }}
        >
          {/* Onboarding */}
          <View
            style={{
              backgroundColor: COLORS.white,
              flexDirection: "row",
              alignItems: "center",
              padding: 20,
              height: 51,
              margin: 5,
              borderRadius: 4,
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#EBF2F7",
                width: 32,
                height: 32,
                borderRadius: 32 / 2,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 10,
              }}
            >
              <Image
                source={RocketLogo}
                style={{ width: 30, height: 30 }}
                resizeMode="contain"
              />
            </View>
            <Text style={{ fontSize: 16, color: "#434343" }}>Onboarding</Text>
          </View>

          {/* post onboarding */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 5,
            }}
          >
            <View
              style={{
                backgroundColor: "#f1f1f1",
                width: 32,
                height: 32,
                borderRadius: 32 / 2,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 5,
              }}
            >
              <FontAwesome5 name="socks" size={24} color="#D3D3D3" />
            </View>

            <Text style={{ fontSize: 16, color: "#D3D3D3" }}>
              Post Onboarding
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 50, flexDirection: "row", display: "flex" }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index + item.title + ""}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
