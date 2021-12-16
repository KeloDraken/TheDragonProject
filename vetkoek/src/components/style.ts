import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    logoContainer: {
        marginTop: "1rem",
    },
    logoPNG: {
        width: wp("5"),
    },
    logoText: {
        fontWeight: "700",
        fontSize: wp("2"),
        color: "#000",
        fontFamily: "IM Fell English SC",
        marginVertical: "1.3rem"

    },
    navLinkText: {
        fontSize: wp("1.5"),
        fontWeight: "600",
        marginLeft: "1.5rem",
        marginTop: "-0.85rem",
        color: "#000",
    },
    communityLinkText: {
        marginLeft: "-0.1rem",
    },
    sidebarSearchFormContainer: {
        backgroundColor: "#000",
        marginBottom: "0.75rem",
        marginTop: "0.5rem",
        marginHorizontal: "0.75rem",
    },
    searchForm: {
        position: "relative",
        color: "rgba(75, 85, 99, 1)"
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
        width: "100%",
        paddingVertical: "0.75rem",
        color: "#000",
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
        // borderRadius: wp("1.3"),
    },
    sidebarCardHeading: {
        fontWeight: "700",
        fontSize: wp("1.6"),
        color: "#000",
        paddingHorizontal: "1rem",
        marginBottom: "1rem",
    },
    sidebarLinkInfo: {
        fontSize: wp("1"),
        color: "#000"
    },
    sidebarLinkTitle: {
        fontSize: wp("1.2"),
        fontWeight: "700",
        color: "#000",
    },
    footerContainer: {
        marginTop: "1rem",
        marginLeft: "0.75rem",
        display: "flex",
        flexDirection: "row",
        paddingLeft: "1rem"
    },
    postItemContainer: {
        flex: 1,
        borderBottomWidth: 1,
        height: "auto",
        borderBottomColor: "rgba(55, 65, 81, 1)"
    },
    postTitle: {
        paddingHorizontal: wp("2"),
        fontSize: wp("1.4"),
        color: "#fff",
        fontWeight: "500"
    },
    postCaption: {
        color: "#fff",
        fontWeight: "400",
    },
    loadMoreBtn: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        backgroundColor: "#000",
        paddingVertical: hp("2"),
        paddingHorizontal: wp("3"),
        marginTop: hp("2"),
        marginBottom: hp("4")
    },
    loadMoreBtnText: {
        color: "#fff",
        fontWeight: "600"
    }
})