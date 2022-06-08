import React from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import COLORS from "../../../src/Colors/colors";
import Person from "../../../assests/images/Personal.png";

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
  const [visible, setVisible] = React.useState(true);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ModalPopUp visible={visible}>
        <View style={{ alignItems: "center" }}>
          <Text style={{ alignItems: "center", fontSize: 15 }}>
            Personal History
          </Text>
          <Text style={{ color: COLORS.subGrey, fontSize: 10 }}>
            Get a look at the eProcess team video
          </Text>
          <Image
            source={Person}
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
            >
              Prev
            </Text>
            <Text
              style={{ textAlign: "right", color: "#242424" }}
              onPress={() => navigation.navigate("SignIn")}
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
    backgroundColor: "rgba(0,0,0,0.5)",
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
