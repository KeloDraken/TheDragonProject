import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    logoContainer: {
        marginTop: "1rem",
    },
    logoPNG: {
        width: 50,
    },
    logoText: {
        fontWeight: "700",
        fontSize: 30,
        color: "#fff",
        fontFamily: "IM Fell English SC",
        marginVertical: "0.75rem"

    },
    navLinkText: {
        fontSize: 20,
        marginLeft: "1.5rem",
        marginTop: "-0.25rem",
        color: "#fff",
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
        fontSize: 16,
        borderRadius: 20,
        paddingLeft: "3.5rem",

    }
})