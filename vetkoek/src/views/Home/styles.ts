import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  pageHeadingContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    textAlign: "center",
    paddingTop: hp("1"),
    marginBottom: hp("4"),
    paddingHorizontal: wp("1"),
  },
  pageHeading: {
    fontSize: wp("2"),
    fontWeight: "700",
  },
});
