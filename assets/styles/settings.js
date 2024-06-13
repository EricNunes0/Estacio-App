import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get("window");
const formWidth = 280 > screen.width ? screen.width : 280; /* Largura do formulário */
export const settingsStyle = StyleSheet.create({
	container: {
		height: "100%",
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "flex-start"
	},
    header: {
        width: "100%",
        height: 80,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 10
    },
    headerIconView: {
        marginLeft: 8
    },
    headerIconButton: {
        width: 48,
        height: 48,
        borderRadius: 250
    },
    headerIcon: {
        width: 48,
        height: 48,
        borderRadius: 250,
        resizeMode: "contain"
    },
    headerTextView: {},
    headerText: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 16
    },
    main: {
        width: "100%"
    },
    mainHeader: {
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#eee",
        padding: 8
    },
    mainTitle: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 16
    },
    mainHeaderAddView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainHeaderAddButton: {
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainHeaderAddIcon: {
        width: 24,
        height: 24
    },
    mainArticle: {
        width: screen.width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainButtons: {
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderBottomColor: "#ddd",
        borderBottomWidth: 2
    },
    mainButtonsLeft: {
        width: "90%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 16,
        padding: 8
    },
    mainEditButtonsLeft: {
        width: "70%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: 16,
        padding: 8
    },
    mainButtonsIconView: {
        width: 24,
        height: 24,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    mainButtonsIcon: {
        width: 24,
        height: 24
    },
    mainButtonsTextView: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    mainButtonsTitle: {
        color: "#222",
        fontFamily: "Poppins",
        fontSize: 14
    },
    mainButtonsTitle2: {
        color: "#222",
        fontFamily: "Poppins",
        fontSize: 14
    },
    mainButtonsSubtitle: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 10
    },
    mainButtonsSubtitle2: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 10
    },
    mainButtonsRight: {
        width: 32,
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    mainEditButtonsRight: {
        width: "30%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    mainButtonsRightOptionsView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    mainButtonsRightOptions: {
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainButtonsRightOptionsIcons: {
        width: 20,
        height: 24
    },
    mainButtonsArrowView: {},
    mainButtonsArrow: {
        width: 14,
        height: 14
    },
    mainInfoView: {},
    mainInfoTitle: {
        fontFamily: "Poppins bold",
        fontSize: 16
    },
    mainInfoDescription: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 12,
        textAlign: "left",
        lineHeight: 16,
        marginTop: 4
    },
    mainInfoLabel: {
        fontFamily: "Poppins bold",
        fontSize: 14,
        marginTop: 16
    },
    mainInfoItem: {
        color: "#666",
        fontFamily: "Poppins",
        fontSize: 12,
        textAlign: "left",
    },
    mainInputView: {
        width: "100%",
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainAddressView: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    mainAddressBlocks: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 8
    },
    mainAddressLabel: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "left"
    },
    mainInfoTopView: {
        padding: 8
    },
    mainInput: {
        width: "90%",
        maxWidth: 400,
        height: 50
    },
    footer: {
        position: "absolute",
        bottom: 0,
        width: "100%"
    },
    footerReturnButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 50,
        bottom: 0,
        borderColor: "#802060",
        borderStyle: "solid",
        borderWidth: 1
    },
    footerReturnButtonText: {
        color: "#802060",
        fontFamily: "Poppins",
        fontSize: 14
    },
    footerUpdateButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 50,
        bottom: 0,
        backgroundColor: "#802060"
    },
    footerUpdateButtonText: {
        color: "#fff",
        fontFamily: "Poppins",
        fontSize: 14
    },
    messagesView: {
        /*pointerEvents: "none",*/
        position: "absolute",
        top: 0,
        left: 0,
        width: screen.width,
        height: screen.height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 8
    },
    editMain: {
        width: "100%"
    },
    editFieldset: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    editView: {
        width: "90%"
    },
    editTitle: {
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold"
    },
    editTextInput: {
        width: "100%",
        maxWidth: 400,
        height: 50
    },
    editFooter: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    editFooterMain: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        marginTop: 16
    },
    editFooterButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: `90%`,
        height: 50,
        borderRadius: 5
    },
    editFooterButton1: {
        borderColor: "#802060",
        borderStyle: "solid",
        borderWidth: 2,
    },
    editFooterButton2: {
        backgroundColor: "#802060"
    },
    editFooterButtonText: {
        fontFamily: "Poppins",
        fontSize: 14
    },
    editFooterButtonText1: {
        color: "#802060"
    },
    editFooterButtonText2: {
        color: "#fff"
    },
    adminsUsersView: {
        width: "100%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        borderBottomColor: "rgba(0, 0, 0, 0.2)",
        borderBottomStyle: "solid",
        borderBottomWidth: 1
    },
    adminsUserName: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold"
    },
    adminsButton: {
        width: 50,
        height: 50,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    adminsButtonIcon: {
        width: "80%",
        height: "80%"
    },
    addressesView: {
        width: "100%",
        display: "flex",
        padding: 8
    },
    addressView: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        borderBottomColor: "rgba(0, 0, 0, 0.2)",
        borderBottomStyle: "solid",
        borderBottomWidth: 1,
    },
    addressInfoView: {
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 8
    },
    addressDataView: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    addressTopView: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 8
    },
    addressIconView: {},
    addressIcon: {
        width: 20,
        height: 20
    },
    addressTitleView: {},
    addressTitle: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 16,
        fontWeight: "bold"
    },
    addressBottomView: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 8
    },
    addressTextView: {},
    addressText: {
        color: "#444",
        fontFamily: "Poppins",
        fontSize: 14
    },
    addressDeleteView: {
        width: "10%"
    },
    addressDeleteButton: {
        width: 30,
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    addressDeleteIcon: {
        width: "80%",
        height: "80%"
    },
    noAddressesView: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    noAddressesIconView: {
        width: 120,
        height: 120,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 250,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    noAddressesIcon: {
        width: "60%",
        height: "60%"
    },
    noAddressesTitle: {
        color: "#000",
        fontFamily: "Poppins bold",
        fontSize: 24,
        marginTop: 8
    },
    noAddressesText: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: 14
    }
});