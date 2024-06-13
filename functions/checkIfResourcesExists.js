import AsyncStorage from "@react-native-async-storage/async-storage";
import { setStandardResources } from "./setStandardResources";
import { clearRegisters } from "./clearRegisters";

export const checkIfResourcesExists = async () => {
    const resourcesString = await AsyncStorage.getItem("resources");
    if(!resourcesString) {
        alert(`Os recursos não existem!`);
        await clearRegisters();
        await setStandardResources();
    }
}