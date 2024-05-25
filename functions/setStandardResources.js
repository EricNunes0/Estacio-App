import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStandardResources = async () => {
    await AsyncStorage.setItem("resources", JSON.stringify({
        acai: {
            tamanho: {
                type: "radio",
                title: "Tamanhos",
                description: "Escolha o tamanho do açaí",
                default: 0,
                required: true,
                items: [
                    {value: 300, label: "300ml", price: 14.00, checked: false},
                    {value: 400, label: "400ml", price: 16.00, checked: false},
                    {value: 500, label: "500ml", price: 18.00, checked: false},
                    {value: 770, label: "770ml", price: 22.00, checked: false},
                    {value: 1000, label: "1ml", price: 33.00, checked: false}
                ]
            },
            calda: {
                type: "radio",
                title: "Calda",
                description: "Escolha 1 calda",
                default: null,
                required: true,
                items: [
                    {label: "Nenhuma", value: "Nenhuma", price: 0.00},
                    {label: "Morango", value: "Morango", price: 0.00},
                    {label: "Chocolate Suiço", value: "Chocolate Suiço", price: 0.00},
                    {label: "Leite Condensado", value: "Leite Condensado", price: 0.00},
                    {label: "Uva", value: "Uva", price: 0.00},
                    {label: "Menta", value: "Menta", price: 0.00},
                    {label: "Caramelo", value: "Caramelo", price: 0.00},
                    {label: "Tutti-frutti", value: "Tutti-frutti", price: 0.00},
                    {label: "Chocomenta", value: "Chocomenta", price: 0.00},
                    {label: "Ovomaltine", value: "Ovomaltine", price: 0.00}
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
                    {label: "Natural", value: "Natural", price: 0.00, checked: false},
                    {label: "Banana", value: "Banana", price: 0.00, checked: false},
                    {label: "Morango", value: "Morango", price: 0.00, checked: false},
                    {label: "Cupuaçu", value: "Cupuaçu", price: 0.00, checked: false}
                ]
            },
            condimentos: {
                type: "checkbox",
                title: "Condimentos",
                description: "Escolha os condimentos",
                default: [],
                required: false,
                items: [
                    {label: "Paçoca", value: "Paçoca", price: 0.00},
                    {label: "Amendoim", value: "Amendoim", price: 0.00},
                    {label: "Granola", value: "Granola", price: 0.00},
                    {label: "Leite em pó", value: "Leite em pó", price: 0.00},
                    {label: "Aveia", value: "Aveia", price: 0.00},
                    {label: "Sucrilhos", value: "Sucrilhos", price: 0.00},
                    {label: "Flocos de arroz", value: "Flocos de arroz", price: 0.00}
                ]
            },
            adicionais: {
                type: "checkbox",
                title: "Adicionais",
                description: "Escolha os adicionais",
                default: [],
                required: false,
                items: [
                    {label: "Nutella (30ml)", value: "Nutella (30ml)", price: 4.00},
                    {label: "Leite Condensado (30ml)", value: "Leite Condensado (30ml)", price: 2.00},
                    {label: "Kitkat em barra", value: "Kitkat em barra", price: 5.00}
                ]
            }
        }
    }))
}