import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  landingContainer: {
    backgroundColor: "rgb(109, 40, 217)",
    borderRadius: wp("0.5"),
    height: "auto",
    marginHorizontal: wp("1"),
    marginVertical: hp("3"),
    paddingHorizontal: wp("3"),
    paddingVertical: hp("5"),
  },
  _landingContainer: {
    backgroundColor: "rgb(59, 130, 246)",
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
    marginBottom: hp("7"),
  },
  heroText: {
    fontSize: wp("2.6"),
    fontWeight: "800",
    color: "#fff",
  },
  heroSubText: {
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#e2e2e2",
    marginBottom: hp("2"),
  },
  _logoText: {
    fontFamily: "Lobster",
    fontWeight: "800",
    color: "#000",
    fontSize: wp("3"),
    marginBottom: hp("7"),
  },
  _heroText: {
    fontSize: wp("2.6"),
    fontWeight: "800",
    color: "#000",
  },
  _heroSubText: {
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#000",
    marginBottom: hp("2"),
  },
  heroBtn: {
    marginVertical: hp("1"),
    borderRadius: wp("0.3"),
    paddingHorizontal: wp("2"),
    paddingVertical: hp("3"),
    backgroundColor: "rgba(216, 216, 216, 0.3)",
  },
  heroBtnText: {
    fontSize: wp("1"),
    fontWeight: "700",
    color: "#000",
  },
  formInput: {
    fontWeight: "700",
    color: "#fff",
    fontSize: wp("1"),
    marginVertical: hp("1"),
    borderRadius: wp("0.3"),
    paddingHorizontal: wp("2"),
    paddingVertical: hp("3"),
    backgroundColor: "rgba(216, 216, 216, 0.3)",
  },
  formSubmitBtn: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    marginVertical: hp("1"),
    borderRadius: wp("0.3"),
    paddingHorizontal: wp("2"),
    paddingVertical: hp("3"),
    backgroundColor: "#000",
  },
  errorMessage: {
    fontSize: wp("1"),
    fontWeight: "600",
    color: "#fff",
  },
  _errorMessage: {
    fontSize: wp("1"),
    fontWeight: "600",
    color: "#000",
  },
  nextPageBtnText: {
    color: "#000",
  },
  _nextPageBtnText: {
    color: "#fff",
  },
});
