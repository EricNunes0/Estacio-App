import { StyleSheet } from "react-native";

export const mainStyle = StyleSheet.create({
    headers: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        height: 80
    },
	headerView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        fontFamily: "Poppins",
        fontWeight: "bold"
	},
	headerTitle: {
		color: "#000",
        fontFamily: "Poppins",
        fontWeight: "bold",
        fontSize: 16
	},
	headerSubtitle: {
		color: "#222",
        fontFamily: "Poppins",
        fontSize: 14
	},
    headerRequired: {
        backgroundColor: "#000",
        padding: 3
    },
    headerRequiredText: {
        borderRadius: 3,
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 8,
        textTransform: "uppercase"
    }
});