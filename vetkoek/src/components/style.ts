import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

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
        color: "#fff",
        fontFamily: "IM Fell English SC",
        marginVertical: "0.75rem"

    },
    navLinkText: {
        fontSize: wp("1.5"),
        marginLeft: "1.5rem",
        marginTop: "-0.25rem",
        color: "#fff",
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
        color: "#fff",
        backgroundColor: "rgb(19, 19, 19)",
        fontSize: wp("1.2"),
        borderRadius: wp("1.3"),
        paddingHorizontal: "3.5rem",
    },
    sidebarCardContainer: {
        backgroundColor: "rgb(19, 19, 19)",
        marginHorizontal: "0.75rem",
        marginBottom: "0.75rem",
        paddingTop: "1rem",
        borderRadius: wp("1.3"),
    },
    sidebarCardHeading: {
        fontWeight: "700",
        fontSize: wp("1.6"),
        color: "#fff",
        paddingHorizontal: "1rem",
        marginBottom: "1rem",
    },
    sidebarLinkInfo:{
        fontSize: wp("1"),
        color: "rgba(156, 163, 175, 1)"
    },
    sidebarLinkTitle:{
        fontSize: wp("1.2"),
        fontWeight: "700",
        color: "#fff",
    },
    footerContainer:{
        marginTop: "1rem",
        marginLeft: "0.75rem",
        display: "flex",
        flexDirection: "row",
        paddingLeft: "1rem"
    },

})