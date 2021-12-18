import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
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
  postItemContainer: {
    flex: 1,
    height: "auto",
    borderRadius: wp("0.5"),
    borderColor: "rgba(209, 213, 219, 1)",
    borderWidth: 2,
    marginRight: wp("1"),
    overflow: "hidden",
  },
  postTitle: {
    fontSize: wp("1.1"),
    color: "#fff",
    fontWeight: "500",
  },
  postCaption: {
    color: "#fff",
    fontSize: wp("1.1"),
    fontWeight: "500",
  },
  postImage: {
    width: wp("4"),
  },
  postTime: {
    fontStyle: "italic",
    color: "#ccc",
    fontSize: wp("1.1"),
    fontWeight: "400",
  },
  postItemContainerHasNoImage: {
    display: "flex",
    borderColor: "rgba(209, 213, 219, 1)",
    borderWidth: 2,
    borderRadius: wp("0.5"),
    marginRight: wp("1"),
    paddingVertical: hp("4"),
    paddingHorizontal: wp("1"),
    overflow: "hidden",
  },
  postTitleHasNoImage: {
    marginBottom: hp("3"),
    fontSize: wp("1.1"),
    color: "#000",
    fontWeight: "700",
  },
  postCaptionHasNoImage: {
    color: "#000",
    fontSize: wp("1.1"),
    fontWeight: "500",
    marginVertical: hp("1"),
  },
  postTimeHasNoImage: {
    fontStyle: "italic",
    color: "rgba(55, 65, 81, 1)",
    fontSize: wp("1.1"),
    fontWeight: "500",
  },
  postFooter: {
    marginTop: hp("6"),
    marginBottom: hp("4"),
    fontWeight: "800",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },
});
