import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import COLORS from "../../../src/Colors/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Ionicons } from "@expo/vector-icons";
export default function CustomInput({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{ marginBottom: 0 }}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.blue
              : COLORS.subGrey,
            alignItems: "center",
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{ color: COLORS.darkBlue, fontSize: 22, marginRight: 10 }}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{ color: COLORS.darkBlue, flex: 1 }}
          {...props}
        />
        {password && (
          <Ionicons
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? "eye-off-outline" : "ios-eye-sharp"}
            color="#A2A2A3"
            size={24}
          />
        )}
      </View>
      {error && (
        <Text style={{ marginTop: 7, color: COLORS.red, fontSize: 12 }}>
          {error}
        </Text>
      )}
    </View>
  );
}

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.textInputGrey,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});
