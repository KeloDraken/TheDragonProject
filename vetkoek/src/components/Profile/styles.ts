import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "column",
  },
  coverImage: {
    left: 0,
    right: 0,
    height: hp("30"),
    marginBottom: hp("2")
  },
  profileImage: {
    width: wp("10"),
    height: hp("20"),
    borderRadius: wp("1"),
    borderWidth: wp("0.5"),
    borderColor: "white",
    marginTop: hp("15"),
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
  editProfileBtn: {
    paddingVertical: hp("1"),
    borderRadius: wp("0.5"),
    marginHorizontal: wp("1"),
    paddingHorizontal: wp("1"),
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.5)",
  },
  editProfileBtnText: {
    fontSize: wp("1.2"),
    fontWeight: "600",
  },
  username: {
    fontSize: wp("1.5"),
    marginLeft: wp("2"),
  },
  displayName: {
    fontSize: wp("1.6"),
    marginLeft: wp("2"),
    fontWeight: "700",
  },
});
