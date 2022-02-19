import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  logoPNG: {
    width: wp("5"),
  },
  logoText: {
    marginTop: hp("3"),
    fontWeight: "700",
    fontSize: wp("2.5"),
    color: "#000",
    fontFamily: "Lobster",
  },
  logoSlogan: {
    fontWeight: "700",
    fontSize: wp("0.5"),
    color: "#000",
    fontFamily: "Lobster",
  },
  navLinkText: {
    fontSize: 27,
    fontWeight: "700",
    marginLeft: "1.5rem",
    color: "#000",
  },
});
