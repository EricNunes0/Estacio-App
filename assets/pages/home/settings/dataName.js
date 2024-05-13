import { useEffect, useState } from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { settingsStyle } from "../../../styles/settings";
import { TextInput } from "react-native-paper";

export default function DataName() {
    const navigation = useNavigation();
    const [name, setName] = useState("");

    return (
        <View style = {settingsStyle.container}>
            <View style = {settingsStyle.main}>
                <View style = {settingsStyle.mainInputView}>
                    <TextInput mode="outlined" label={"Nome completo"} value={name} onChangeText={(text) => {setName(text)}} style = {settingsStyle.mainInput}></TextInput>
                </View>
            </View>
        </View>
    );
}