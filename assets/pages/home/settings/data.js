import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { settingsStyle } from "../../../styles/settings";
import { useEffect, useState } from "react";
import { tokenRemoveFromUser } from "../../../../functions/tokenRemoveFromUser";

export default function Data() {
    const navigation = useNavigation();
    
    return (
        <View style = {settingsStyle.container}>
            <View style = {settingsStyle.main}>
                {/* Informações pessoais */}
                <TouchableOpacity onPress={() => {navigation.navigate("DataName")}} style = {settingsStyle.mainButtons}>
                    <View style = {settingsStyle.mainButtonsLeft}>
                        <View style = {settingsStyle.mainButtonsTextView}>
                            <Text style = {settingsStyle.mainButtonsTitle2}>Informações pessoais</Text>
                            <Text style = {settingsStyle.mainButtonsSubtitle2}>Nome completo</Text>
                        </View>
                    </View>
                    <View style = {settingsStyle.mainButtonsRight}>
                        <View style = {settingsStyle.mainButtonsArrowView}>
                            <Image source={require("../../../svgs/settings/right.svg")} style = {settingsStyle.mainButtonsArrow}></Image>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* Informações de acesso */}
                <TouchableOpacity style = {settingsStyle.mainButtons}>
                    <View style = {settingsStyle.mainButtonsLeft}>
                        <View style = {settingsStyle.mainButtonsTextView}>
                            <Text style = {settingsStyle.mainButtonsTitle2}>Informações de acesso</Text>
                            <Text style = {settingsStyle.mainButtonsSubtitle2}>Dados de contato e acesso a conta</Text>
                        </View>
                    </View>
                    <View style = {settingsStyle.mainButtonsRight}>
                        <View style = {settingsStyle.mainButtonsArrowView}>
                            <Image source={require("../../../svgs/settings/right.svg")} style = {settingsStyle.mainButtonsArrow}></Image>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}