import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  // edit profile modal
  container: {
    flex: 1,
  },
  containeralt: {
    width: wp("50"),
    backgroundColor: "white",
    borderColor: "rgba(0,0,0,0.5)",
    borderRadius: wp("0.5"),
    borderWidth: 2,
    marginTop: 7+"%",
    marginLeft: 25+"%",
    padding: wp("1"),
  },

  headerContainer: {
    display: "flex",
    flexDirection: "column",
  },
  coverImage: {
    left: 0,
    right: 0,
    height: hp("30"),
    marginBottom: hp("2"),
    backgroundColor: "#D8D8D8",
  },
  profileImage: {
    width: wp("10"),
    height: hp("21%"),
    borderRadius: wp("50%"),
    borderWidth: wp("0.3"),
    borderColor: "white",
    marginTop: hp("15"),
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
    color: "rgba(0,0,0,0.8)",
    fontSize: wp("1.2"),
    marginLeft: wp("2"),
    fontWeight: "500",
  },
  displayName: {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    color: "rgba(0,0,0,0.9)",
    fontSize: wp("1.4"),
    marginLeft: wp("2"),
    fontWeight: "700",
  },
});
