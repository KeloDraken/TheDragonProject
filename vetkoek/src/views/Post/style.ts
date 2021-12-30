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
    paddingVertical: hp("1.3"),
    paddingHorizontal: wp("2"),
    borderRadius: wp("2"),
  },
  loadMoreBtnText: {
    fontSize: wp("1.3"),
    color: "#fff",
    fontWeight: "700",
  },
  setTagsBtn: {
    backgroundColor: "#000",
    display: "flex",
    textAlign: "center",
    borderRadius: wp("0.5"),
    marginTop: hp("1"),
    paddingVertical: hp("1"),
  },
  setTagsBtnText: {
    color: "#fff",
    fontSize: wp("1.5"),
    fontWeight: "700",
  },
  searchIconContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    paddingLeft: wp("1"),
    marginTop: hp("1.2"),
  },
  searchForm: {
    width: "100%",
    position: "relative",
    color: "#000",
  },
  tagsTextInput: {
    borderRadius: wp("0.5"),
    width: "100%",
    paddingVertical: hp("1.9"),
    color: "#000",
    backgroundColor: "rgb(216, 216, 216)",
    fontSize: wp("1.2"),
    paddingHorizontal: wp("4"),
  },
});
