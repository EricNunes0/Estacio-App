import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("screen");
export const messageStyle = StyleSheet.create({
    message: {
        pointerEvents: "all",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        maxWidth: 400,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#fff",
        marginTop: 8,
        marginLeft: "auto",
        marginRight: "auto"
    },
    message_info: {
        backgroundColor: "#d0eaf5"
    },
    message_success: {
        backgroundColor: "#e0f0d5"
    },
    message_warning: {
        backgroundColor: "#faf5d5"
    },
    message_error: {
        backgroundColor: "#e0cac5"
    },
    messageIconView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50
    },
    messageIcon: {
        width: 20,
        height: 20
    },
    messageTextView: {
        width: `calc(100% - ${50 * 2}px)`,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: 8
    },
    messageTitle: {
        fontFamily: "Poppins",
        fontSize: 12,
        fontWeight: "bold"
    },
    messageTitle_info: {
        color: "#4a80a0"
    },
    messageTitle_success: {
        color: "#55705a"
    },
    messageTitle_warning: {
        color: "#957035"
    },
    messageTitle_error: {
        color: "#ba3025"
    },
    messageContent: {
        fontFamily: "Poppins",
        fontSize: 10
    },
    messageContent_info: {
        color: "#4a80a0"
    },
    messageContent_success: {
        color: "#55705a"
    },
    messageContent_warning: {
        color: "#957035"
    },
    messageContent_error: {
        color: "#ba3025"
    },
    messageCloseView: {
        width: 50,
        height: 50
    },
    messageCloseButton: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    messageClose: {
        width: 20,
        height: 20
    }
});