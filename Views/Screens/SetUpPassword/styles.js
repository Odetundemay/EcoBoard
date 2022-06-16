import { StyleSheet } from "react-native";
const STYLES = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  Logo: {
    height: 180,
    width: "100%",
    maxHeight: 350,
  },
  powered: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 0.32,
    paddingBottom: 50,
  },
  EcobankLogo: {
    width: 43.11,
    height: 21.16,
    alignItems: "right",
    paddingBottom: 50,
  },
  header: {
    fontSize: 30,
    paddingBottom: 10,
  },
  subtitle: {
    color: "#A0A0A0",
    fontSize: 12,
  },
  headerBlock: {
    fontSize: 30,
    color: "#4385B7",
    paddingBottom: 20,
  },
  text: {
    paddingTop: 30,
    textAlign: "left",
    fontSize: 13,
    color: "#A0A0A0",
  },
  forgot: {
    textAlign: "right",
    color: "#A0A0A0",
    paddingBottom: 40,
  },
  button: {
    height: 50,
    width: "100%",
    borderRadius: 4,
    paddingBottom: 20,
  },
});
export default STYLES;
