import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import COLORS from "../../../src/Colors/colors";

export default function CustomButton({ title, onPress = () => {} }) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        height: 50,
        width: "100%",
        backgroundColor: COLORS.blue,
        justifyContent: "center",
        alignItems: "center ",
        borderRadius: 4,
      }}
    >
      <Text style={{ color: COLORS.white, fontSize: 13, fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
