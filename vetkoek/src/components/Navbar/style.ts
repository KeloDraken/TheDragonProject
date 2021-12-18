import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  logoPNG: {
    width: wp("5"),
  },
  logoText: {
    fontWeight: "700",
    fontSize: wp("2.5"),
    color: "rgba(17, 24, 39, 1)",
    fontFamily: "Lobster",
  },
  logoSlogan: {
    fontWeight: "700",
    fontSize: wp("0.5"),
    color: "rgba(17, 24, 39, 1)",
    fontFamily: "Lobster",
  },
  navLinkText: {
    fontSize: wp("1.5"),
    fontWeight: "600",
    marginLeft: "1.5rem",
    marginTop: "-0.85rem",
    color: "rgba(17, 24, 39, 1)",
  },
  navBtnText: {
    fontSize: wp("1.5"),
    fontWeight: "600",
    marginLeft: "1.5rem",
    marginTop: "-0.85rem",
    color: "#fff",
  },  
  communityLinkText: {
    marginLeft: "-0.1rem",
  },
});
