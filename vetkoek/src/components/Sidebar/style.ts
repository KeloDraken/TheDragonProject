import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  footerContainer: {
    marginTop: "1rem",
    marginLeft: "0.75rem",
    display: "flex",
    flexDirection: "row",
    paddingLeft: "1rem",
  },
  sidebarSearchFormContainer: {
    backgroundColor: "#fff",
    marginBottom: "0.75rem",
    marginTop: "0.5rem",
    marginHorizontal: "0.75rem",
  },
  searchForm: {
    position: "relative",
    color: "rgba(75, 85, 99, 1)",
  },
  searchIconContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    paddingLeft: "0.75rem",
    marginTop: "0.45rem",
  },
  searchTextInput: {
    borderRadius: wp("2"),
    width: "100%",
    paddingVertical: "0.75rem",
    color: "rgba(17, 24, 39, 1)",
    backgroundColor: "rgb(216, 216, 216)",
    fontSize: wp("1.2"),
    // borderRadius: wp("1.3"),
    paddingHorizontal: "3.5rem",
  },
  sidebarCardContainer: {
    backgroundColor: "rgb(216, 216, 216)",
    marginHorizontal: "0.75rem",
    marginBottom: "0.75rem",
    paddingTop: "1rem",
    borderRadius: wp("2"),
  },
  sidebarCardHeading: {
    fontWeight: "700",
    fontSize: wp("1.6"),
    color: "rgba(17, 24, 39, 1)",
    paddingHorizontal: "1rem",
    marginBottom: "1rem",
  },
  sidebarLinkInfo: {
    fontSize: wp("1"),
    color: "rgba(17, 24, 39, 1)",
  },
  sidebarLinkTitle: {
    fontSize: wp("1.2"),
    fontWeight: "700",
    color: "rgba(17, 24, 39, 1)",
  },
});
