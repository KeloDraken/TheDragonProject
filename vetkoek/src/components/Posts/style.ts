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
    height: hp("53%"),
    // borderRadius: wp("0.5"),
    borderColor: "rgba(209, 213, 219, 1)",
    borderWidth: 1,
    marginHorizontal: wp("1"),
    overflow: "hidden",
  },
  postTitle: {
    marginTop: hp("3"),
    fontSize: wp("1.1"),
    color: "#fff",
    fontWeight: "500",
  },
  postCaption: {
    color: "#fff",
    fontSize: wp("2"),
    fontWeight: "700",
  },
  postImage: {
    height: "auto",
    width: wp("4"),
  },
  postTime: {
    fontStyle: "italic",
    color: "#fff",
    marginBottom: hp("2"),
    fontSize: wp("1.1"),
    fontWeight: "700",
  },
  postItemContainerHasNoImage: {
    display: "flex",
    borderColor: "rgba(209, 213, 219, 1)",
    borderWidth: 1,
    height: "auto",
    // borderRadius: wp("0.5"),
    marginHorizontal: wp("1"),
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
    fontSize: wp("3.3"),
    fontWeight: "700",
    marginVertical: hp("1"),
  },
  postTimeHasNoImage: {
    fontStyle: "italic",
    color: "rgba(55, 65, 81, 1)",
    fontSize: wp("1.1"),
    fontWeight: "500",
  },
  postAuthor: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    color: "rgba(55, 65, 81, 1)",
    fontSize: wp("1.3"),
    fontWeight: "700",
  },
  postFooter: {
    marginTop: hp("6"),
    marginBottom: hp("4"),
    fontWeight: "800",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
  },

  // Author header
  headerContainer: {
    display: "flex",
    flexDirection: "column",
  },
  coverImage: {
    left: 0,
    right: 0,
    height: hp("15"),
    marginBottom: hp("0.5"),
    marginHorizontal: wp("0.6"),
    backgroundColor: "#D8D8D8",
  },
  profileImage: {
    width: wp("6.3"),
    height: hp("13"),
    borderRadius: wp("50%"),
    borderWidth: wp("0.2"),
    borderColor: "white",
    marginTop: 13 + "%",
    backgroundColor: "#D8D8D8",
    marginLeft: wp("2"),
  },
  empty: {
    marginTop: hp("3"),
    marginBottom: hp("2"),
  },
  editProfileContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  displayName: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    color: "rgba(0,0,0,0.9)",
    fontSize: wp("1.2"),
    marginLeft: wp("2"),
    fontWeight: "700",
  },
});
