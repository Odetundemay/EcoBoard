import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PropTypes from "prop-types";

export default function DATA() {
  const proptype = {
    item: PropTypes.object,
  };

  state = { isSelected: false };
  onPress = () => {
    this.setState((prevState, prevProps) => ({
      isSelected: !prevState.isSelected,
    }));
  };

  const [hideUp, setHideUp] = React.useState();

  renderDetails = () => (
    <View>
      <Text style={{ flex: 1, fontSize: 16, color: "grey", paddingTop: 10 }}>
        {this.props.item.description}
      </Text>
    </View>
  );

  const { isSelected } = [this.state];
  return (
    <View style={{ flex: 1, flexDirection: "column", margin: 10 }}>
      <TouchableWithoutFeedback>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ flex: 1, fontSize: 20 }}>
              {this.props.item.title}
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#777779",
                borderStyle: "dashed",
                borderRadius: 4,
                marginTop: 10,
              }}
            >
              <Text style={{ padding: 5 }}>{this.props.item.subHeader}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={this.onPress}>
            <View style={{ alignItems: "flex-end" }}>
              <Entypo
                onPress={() => setHideUp(!hideUp)}
                name={hideUp ? "chevron-down" : "downcircleo"}
                size={24}
                color="#A2A2A3"
              />
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      {this.state.isSelected && this.renderDetails()}
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
