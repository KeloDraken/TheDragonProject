import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  tagContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tag: {
    marginTop: hp("4"),
    marginHorizontal: wp("1"),
    backgroundColor: "red",
  },
});
