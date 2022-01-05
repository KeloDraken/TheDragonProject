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
    borderRadius: wp("0.5"),
    borderColor: "rgba(209, 213, 219, 1)",
    borderWidth: 2,
  },
  tagHeaderBar: {
    height: hp("2"),
    borderTopRightRadius: wp("0.5"),
    borderTopLeftRadius: wp("0.5"),
  },
  tagName: {
    paddingHorizontal: wp("2"),
    marginTop: hp("3"),
    fontSize: wp("1.4"),
    color: "rgba(0,0,0,0.85)",
    fontWeight: "800",
  },
  tagPosts: {
    paddingHorizontal: wp("2"),
    marginTop: hp("0.6"),
    marginBottom: hp("3"),
    fontSize: wp("1"),
    color: "rgba(0,0,0,0.7)",
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
