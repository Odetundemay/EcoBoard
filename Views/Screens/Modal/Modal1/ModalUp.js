import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import COLORS from "../../../../src/Colors/colors";
import Person from "../../../../assests/images/Personal.png";
import CompanyPolicy from "../../../../assests/images/CompanyPolicy.png";
import EmergencyContact from "../../../../assests/images/EmergencyContact.png";
import SubmitDoc from "../../../../assests/images/SubmitDoc.png";

const { width, height } = Dimensions.get("window");

const ModalPopUp = ({ visible, children }) => {
  const [showModal, setShowModal] = React.useState(visible);
  // const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      // Animated.spring(scaleValue, {
      //   toValue: 1,
      //   duration: 300,
      //   useNativeDriver: true,
      // }).start();
    } else {
      setTimeout(() => setShowModal(false));
      // Animated.timing(scaleValue, {
      //   toValue: 0,
      //   duration: 300,
      //   useNativeDriver: true,
      // }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={[styles.modalBackGround]}>
        <View
          style={[
            styles.modalContainer,
            // { transform: [{ scale: scaleValue }] },
          ]}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default function ModalUp({ navigation, imgSource, onPress = () => {} }) {
  const [visible, setVisible] = useState(true);
  const [page, setPage] = useState(0);
  const pageContent = [
    {
      header: "Personal History",
      text: "Get a look at the eProcess team video",
      imageSrc: Person,
    },
    {
      header: "Company Policy",
      text: "Get a look at the eProcess team video",
      imageSrc: CompanyPolicy,
    },
    {
      header: " Emergency Contact",
      text: "Get a look at the eProcess team video",
      imageSrc: EmergencyContact,
    },
    {
      header: "Submit Documents",
      text: "Get a look at the eProcess team video",
      imageSrc: SubmitDoc,
    },
    {
      header: "EGibeerish",
      text: "Get a look at the eProcess team video",
      imageSrc: Person,
    },
  ];
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ModalPopUp visible={visible}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ alignItems: "center", fontSize: 15 }}>
            {pageContent[page].header}
          </Text>
          <Text style={{ color: COLORS.subGrey, fontSize: 10 }}>
            {pageContent[page].text}
          </Text>
          <Image
            source={pageContent[page].imageSrc}
            style={{ width: "80%", height: 150, marginTop: 30 }}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              textAlign: "left",
              fontSize: 13,
              color: COLORS.green,
              marginRight: 0,
              marginTop: 30,
            }}
          >
            Go to Dashboard
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",

              // justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <Text
              style={{ marginRight: 15, textAlign: "right", color: "#C4C4C4" }}
              onPress={() => {
                if (page == 0) {
                  setPage(4);
                } else {
                  setPage(page - 1);
                }
              }}
            >
              Prev
            </Text>
            <Text
              style={{ textAlign: "right", color: "#242424" }}
              // onPress={() => navigation.navigate("odal2")}
              onPress={() => {
                if (page == 4) {
                  setPage(0);
                } else {
                  setPage(page + 1);
                }
              }}
            >
              Next
            </Text>
          </View>
        </View>
      </ModalPopUp>
    </View>
  );
}

const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    backgroundColor: "#4F4F4F",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 4,
    elevation: 20,
  },
});
