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
    fontSize: wp("2"),
    fontWeight: "700",
    marginLeft: "1.5rem",
    // marginTop: "-1rem",
    color: "#000",
  },
  navBtnText: {
    fontSize: wp("1.5"),
    fontWeight: "800",
    marginLeft: "1.5rem",
    marginTop: "-0.85rem",
    // color: "#000",
  },
});
