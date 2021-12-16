import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    pageHeading: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        fontWeight: "700",
        fontSize: wp("2.5"),
        marginVertical: hp("1")
    },
    pageContent: {
        fontSize: wp('1.6'),
        marginHorizontal: wp("2"),
        marginVertical: hp("2")
    }
})