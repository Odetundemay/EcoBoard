import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PropTypes from "prop-types";

export default function DATA({ item }) {
  const [hideUp, setHideUp] = useState(false);

  const renderDetails = (
    <View>
      <Text style={{ flex: 1, fontSize: 16, color: "grey", paddingTop: 10 }}>
        {item.description}
      </Text>
    </View>
  );
  return (
    <View style={{ flex: 1, flexDirection: "column", margin: 10 }}>
      <TouchableWithoutFeedback>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ flex: 1, fontSize: 20 }}>{item.title}</Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#777779",
                borderStyle: "dashed",
                borderRadius: 4,
                marginTop: 10,
              }}
            >
              <Text style={{ padding: 5, fontSize: 10 }}>{item.subHeader}</Text>
            </View>
          </View>
          {/* <TouchableOpacity onPress={onPress}> */}
          <View style={{ alignItems: "flex-end" }}>
            <AntDesign
              onPress={() => setHideUp(!hideUp)}
              name={hideUp ? "upcircleo" : "downcircleo"}
              size={24}
              color="#A2A2A3"
            />
          </View>
          {/* </TouchableOpacity> */}
        </View>
      </TouchableWithoutFeedback>
      {hideUp && renderDetails}
    </View>
    //   {
    //     category: "Personal History",
    //     subCategory: [
    //       "Personal Details",
    //       "Address",
    //       "Employment Records",
    //       "Additional",
    //     ],
    //   },
    //   {
    //     category: "Submit Documents",
    //     subCategory: [
    //       "Reciept Aknowledgement",
    //       "Non-disclosure agreement",
    //       "Employment Records",
    //     ],
    //   },
  );
}
