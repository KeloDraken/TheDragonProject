import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  footerContainer: {
    width:100+"%",
    marginVertical: hp("2"),
    marginLeft: wp("0.3"),
    display: "flex",
    flexDirection: "row",
    paddingLeft: wp("1"),
  },
  sidebarSearchFormContainer: {
    backgroundColor: "#fff",
    marginBottom: hp("2"),
    marginTop: hp("3"),
    marginHorizontal: wp("1"),
  },
  searchForm: {
    position: "relative",
    color: "#000",
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
  searchTextInput: {
    borderRadius: wp("0.5"),
    width: "100%",
    paddingVertical: hp("1.9"),
    color: "#000",
    backgroundColor: "rgb(216, 216, 216)",
    fontSize: 17,
    paddingHorizontal: wp("4"),
  },
  sidebarCardContainer: {
    backgroundColor: "rgb(216, 216, 216)",
    marginHorizontal: wp("1"),
    marginBottom: hp("2"),
    paddingVertical: hp("2"),
    borderRadius: wp("0.5 "),
  },
  sidebarCardHeading: {
    fontWeight: "700",
    fontSize: 20,
    color: "#000",
    paddingHorizontal: wp("1.4"),
    marginBottom: hp("2"),
  },
  sidebarLinkInfo: {
    fontSize: 15,
    color: "#000",
  },
  sidebarLinkTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
});
