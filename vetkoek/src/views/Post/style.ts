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
});
