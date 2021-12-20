import { StyleSheet } from "react-native";
import {
  // heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "17%",
  },
  _logoText: {
    fontFamily: "Lobster",
    fontWeight: "800",
    color: "#000",
    fontSize: wp("3"),
  },
});
