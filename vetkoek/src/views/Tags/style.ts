import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  pageHeadingContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: hp("1.2"),
    marginBottom: hp("4"),
  },
  pageHeading: {
    fontSize: wp("2"),
    fontWeight: "700",
  },
  tag: {
    height: "auto",
    width: "auto",
    paddingHorizontal: wp("1"),
    borderRadius: wp("0.5"),
    borderColor: "rgba(209, 213, 219, 1)",
    borderWidth: 2,
  },
  tagName: {
    marginVertical: hp("3"),
    fontSize: wp("1.6"),
    color: "#000",
    fontWeight: "800",
  },
  loadMoreBtn: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    paddingVertical: hp("2"),
    paddingHorizontal: wp("3"),
    borderRadius: wp("0.5"),
    marginTop: hp("2"),
    marginBottom: hp("4"),
  },
  loadMoreBtnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
