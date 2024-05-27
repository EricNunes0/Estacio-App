import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export const setStandardResources = async () => {
    const getId = () => {
        return uuid.v4();
    };

    alert("Resetando recursos!");
    await AsyncStorage.setItem("resources", JSON.stringify({
        acai: {
            tamanho: {
                type: "radio",
                title: "Tamanhos",
                description: "Escolha o tamanho do açaí",
                default: 0,
                required: true,
                items: [
                    {id: getId(), value: 300, label: "300ml", price: 14.00, checked: false},
                    {id: getId(), value: 400, label: "400ml", price: 16.00, checked: false},
                    {id: getId(), value: 500, label: "500ml", price: 18.00, checked: false},
                    {id: getId(), value: 770, label: "770ml", price: 22.00, checked: false},
                    {id: getId(), value: 1000, label: "1L", price: 33.00, checked: false}
                ]
            },
            calda: {
                type: "radio",
                title: "Calda",
                description: "Escolha 1 calda",
                default: null,
                required: true,
                items: [
                    {id: getId(), label: "Nenhuma", value: "Nenhuma", price: 0.00},
                    {id: getId(), label: "Morango", value: "Morango", price: 0.00},
                    {id: getId(), label: "Chocolate Suiço", value: "Chocolate Suiço", price: 0.00},
                    {id: getId(), label: "Leite Condensado", value: "Leite Condensado", price: 0.00},
                    {id: getId(), label: "Uva", value: "Uva", price: 0.00},
                    {id: getId(), label: "Menta", value: "Menta", price: 0.00},
                    {id: getId(), label: "Caramelo", value: "Caramelo", price: 0.00},
                    {id: getId(), label: "Tutti-frutti", value: "Tutti-frutti", price: 0.00},
                    {id: getId(), label: "Chocomenta", value: "Chocomenta", price: 0.00},
                    {id: getId(), label: "Ovomaltine", value: "Ovomaltine", price: 0.00}
                ]
            },
            sabores: {
                type: "checkbox",
                title: "Sabores",
                description: "Escolha os sabores",
                default: [],
                max: 2,
                required: true,
                items: [
                    {id: getId(), label: "Natural", value: "Natural", price: 0.00, checked: false},
                    {id: getId(), label: "Banana", value: "Banana", price: 0.00, checked: false},
                    {id: getId(), label: "Morango", value: "Morango", price: 0.00, checked: false},
                    {id: getId(), label: "Cupuaçu", value: "Cupuaçu", price: 0.00, checked: false}
                ]
            },
            condimentos: {
                type: "checkbox",
                title: "Condimentos",
                description: "Escolha os condimentos",
                default: [],
                required: false,
                items: [
                    {id: getId(), label: "Paçoca", value: "Paçoca", price: 0.00},
                    {id: getId(), label: "Amendoim", value: "Amendoim", price: 0.00},
                    {id: getId(), label: "Granola", value: "Granola", price: 0.00},
                    {id: getId(), label: "Leite em pó", value: "Leite em pó", price: 0.00},
                    {id: getId(), label: "Aveia", value: "Aveia", price: 0.00},
                    {id: getId(), label: "Sucrilhos", value: "Sucrilhos", price: 0.00},
                    {id: getId(), label: "Flocos de arroz", value: "Flocos de arroz", price: 0.00}
                ]
            },
            adicionais: {
                type: "checkbox",
                title: "Adicionais",
                description: "Escolha os adicionais",
                default: [],
                required: false,
                items: [
                    {id: getId(), label: "Nutella (30ml)", value: "Nutella (30ml)", price: 4.00},
                    {id: getId(), label: "Leite Condensado (30ml)", value: "Leite Condensado (30ml)", price: 2.00},
                    {id: getId(), label: "Kitkat em barra", value: "Kitkat em barra", price: 5.00}
                ]
            }
        }
    }));
    console.log(JSON.parse(await AsyncStorage.getItem("resources")));
}