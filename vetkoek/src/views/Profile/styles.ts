import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  pageHeadingContainer: {
    paddingTop: hp("1"),
    marginBottom: hp("1"),
  },
  pageHeading: {
    fontSize: wp("1.5"),
    fontWeight: "700",
  },
  pageSubheading: {
    fontSize: wp("0.9"),
    color: "rgba(0,0,0,0.7)",
  },
});
