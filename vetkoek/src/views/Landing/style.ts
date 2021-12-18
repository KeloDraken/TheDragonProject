import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  header:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  landingContainer: {
    backgroundColor: "#3B49DF",
    borderRadius: wp("0.5"),
    height: "auto",
    marginHorizontal: wp("1"),
    marginVertical: hp("3"),
    paddingHorizontal: wp("3"),
    paddingVertical: hp("5"),
  },
  logoText: {
    fontFamily: "Lobster",
    fontWeight: "800",
    color: "#fff",
    fontSize: wp("3"),
    marginBottom: hp("7")
  },
  heroText: {
    fontSize: wp("2.6"),
    fontWeight: "800",
    color: "#fff",
  },
  heroSubText: {
    fontWeight: "700",
    color: "#e2e2e2",
    marginBottom: hp("2"),
  },
  heroBtn: {
    backgroundColor: "rgba(216, 216, 216, 0.3)",
    marginVertical: hp("1"),
    borderRadius: wp("0.3"),
    paddingHorizontal: wp("2"),
    paddingVertical: hp("3"),
  },
  heroBtnText: {
    fontSize: wp("1"),
    fontWeight: "700",
    color: "#fff",
  },
});
