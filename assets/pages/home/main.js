import { useState, useEffect } from "react";
import { Text, View, Alert, Button, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { mainStyle } from "../../styles/main";
import { Checkbox, RadioButton, TextInput } from "react-native-paper";
import { addPedidoToCart } from "../../../functions/addPedidoToCart";
import uuid from "react-native-uuid";

export default function Category() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState('');
    const [price, setPrice] = useState({
        size: 0,
        adicionais: [0, 0, 0],
        total: 0
    });
    const [size, setSize] = useState(0);
    const [sizes, setSizes] = useState([
        {size: 300, label: "300ml", price: 14.00},
        {size: 400, label: "400ml", price: 16.00},
        {size: 500, label: "500ml", price: 18.00},
        {size: 770, label: "770ml", price: 22.00},
        {size: 1000, label: "1ml", price: 33.00}
    ]);
    const [calda, setCalda] = useState(null);
    const [sabores, setSabores] = useState([
        {label: "Natural", checked: false},
        {label: "Banana", checked: false},
        {label: "Morango", checked: false},
        {label: "Cupuaçu", checked: false}
    ]);
    const [condimentos, setCondimentos] = useState([
        {label: "Paçoca", checked: false},
        {label: "Amendoim", checked: false},
        {label: "Granola", checked: false},
        {label: "Leite em pó", checked: false},
        {label: "Aveia", checked: false},
        {label: "Sucrilhos", checked: false},
        {label: "Flocos de arroz", checked: false}
    ]);
    const [adicionais, setAdicionais] = useState([
        {label: "Nutella (30ml)", checked: false, price: 4.00},
        {label: "Leite Condensado (30ml)", checked: false, price: 2.00},
        {label: "Kitkat em barra", checked: false, price: 5.00}
    ]);
    const [observation, setObservation] = useState("");

    useEffect(() => {
        tokenGetUser();
    }, [])
    
    const tokenGetUser = async () => {
        try {
            const tokenJSON = await AsyncStorage.getItem("token");
            if(tokenJSON) {
                let token = JSON.parse(tokenJSON).token;
                const usersString = await AsyncStorage.getItem("users");
                let usersArray = JSON.parse(usersString);
                let i = 0;
                for(let registeredUser of usersArray) {
                    if(registeredUser.token === token) {
                        break;
                    } else {
                        i++;
                    }
                };
                setUserId(usersArray[i].id);
            } else {
                alert(`Não existe um token: ${tokenJSON}`);
                navigation.navigate("Login");
            }
        } catch (e) {
            alert(`Não foi possível obter o token: ${e}`);
        }
    };

    /* Função para calcular preço total */
    const calculatePrice = () => {
        let newPrice = price;
        let newTotal = 0;
        newTotal += newPrice.size;
        for(const adicional of newPrice.adicionais) {
            newTotal += adicional;
        }
        newPrice.total = newTotal;
        setPrice(newPrice);
        return newPrice;
    };

    /* Função para alterar o tamanho */
    const changeSize = (newSize) => {
        setSize(newSize);
        let newPrice = price;
        let oldSizes = sizes;
        for(const oldSize of oldSizes) {
            if(oldSize.size === newSize) {
                newPrice.size = oldSize.price;
                break;
            }
        };
        setPrice(newPrice);
        calculatePrice();
    };

    /* Função para alterar os sabores */
    const changeSabores = (index) => {
        const newSabores = [...sabores];
        const checkedCount = newSabores.filter(cb => cb.checked).length;

        if (checkedCount < 2 || newSabores[index].checked === true) {
            newSabores[index].checked = !newSabores[index].checked;
            setSabores(newSabores);
        } else {
            alert("Você só pode selecionar até 2 sabores.");
        }
    };
    
    /* Função para alterar os condimentos */
    const changeCondimentos = (index) => {
        const newCondimentos = [...condimentos];
        newCondimentos[index].checked = !newCondimentos[index].checked;
        setCondimentos(newCondimentos);
    };
    
    /* Função para alterar os adicionais */
    const changeAdicionais = (index) => {
        let newPrice = price;
        const newAdicionais = [...adicionais];
        if(newAdicionais[index].checked) {
            newAdicionais[index].checked = false;
            newPrice.adicionais[index] = 0;
        } else {
            newAdicionais[index].checked = true;
            newPrice.adicionais[index] = newAdicionais[index].price;
        };
        setAdicionais(newAdicionais);
        setPrice(newPrice);
        calculatePrice();
    };

    const observationMax = 140;
    const changeObservation = (text) => {
        setObservation(text);
    }

    const pedido = {
        id: uuid.v4(),
        createdAt: new Date().getTime(),
        type: 0, /* 0 = Açaí, 1 = Sorvete */
        price: price.total,
        count: 1,
        tamanho: size,
        calda: calda,
        sabores: sabores.filter((sabor) => sabor.checked).map((sabor) => sabor.label),
        condimentos: condimentos.filter((condimento) => condimento.checked).map((condimento) => condimento.label),
        adicionais: adicionais.filter((adicional) => adicional.checked).map((adicional) => adicional.label),
        observation: observation || null
    };
    /* Função para enviar o pedido */
    const enviarPedido = async () => {
        try {
            console.log(pedido)
            if(pedido.tamanho === 0) {
                alert("Selecione um tamanho");
                return;
            };
            if(!pedido.calda) {
                alert("Selecione uma calda");
                return;
            };
            if(pedido.sabores.length === 0) {
                alert("Selecione ao menos um sabor");
                return;
            };
            
            /* Adicinando ao carrinho */
		    const usersString = await AsyncStorage.getItem("users");
            const usersArray = usersString ? JSON.parse(usersString) : [];
            for(const user of usersArray) {
                if(user.id === userId) {
                    await addPedidoToCart(user, pedido);
                    break;
                }
            };
            navigation.navigate("Carrinho");
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <ScrollView>
            <View style={mainStyle.container}>
                <View style={mainStyle.header}>
                    <View style={mainStyle.headerBackgroundView}>
                        <ImageBackground source={require("../../images/açai_background.png")} style={mainStyle.headerBackground}></ImageBackground>
                    </View>
                    <View style={mainStyle.headerContentView}>
                        <Text style={mainStyle.headerContentTitle}>Açaí</Text>
                        <Text style={mainStyle.headerContentSubtitle}>O melhor açaí da região</Text>
                        <Text style={mainStyle.headerContentSubtitle}>A partir de R$14,00</Text>
                    </View>
                </View>
                <View style={mainStyle.customizeSection}>
                    {/* Tamanho do açaí */}
                    <View style={mainStyle.headers}>
                        <View style={mainStyle.headerView}>
                            <View>
                                <Text style={mainStyle.headerTitle}>Tamanhos</Text>
                                <Text style={mainStyle.headerSubtitle}>Escolha o tamanho do açaí</Text>
                            </View>
                            <View style={mainStyle.headerRequired}>
                                <Text style={mainStyle.headerRequiredText}>Obrigatório</Text>
                            </View>
                        </View>
                    </View>
                    <View style={mainStyle.customizeButtonsView}>
                        <RadioButton.Group value={size} onValueChange={newSize => changeSize(newSize)}>
                            <View style={mainStyle.customizeRadioMain}>
                                {sizes.map((size) => 
                                    <View style={mainStyle.customizeRadioView}>
                                        <Text style={mainStyle.radioTitle}>{size.label}</Text>
                                        <Text style={mainStyle.radioSubtitle}>{(size.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                                        <RadioButton.Item value = {size.size} style={mainStyle.radioOption}/>
                                    </View>
                                )}
                            </View>
                        </RadioButton.Group>
                    </View>
                    {/* Calda do açaí */}
                    <View style={mainStyle.headers}>
                        <View style={mainStyle.headerView}>
                            <View>
                                <Text style={mainStyle.headerTitle}>Calda</Text>
                                <Text style={mainStyle.headerSubtitle}>Escolha 1 calda</Text>
                            </View>
                            <View style={mainStyle.headerRequired}>
                                <Text style={mainStyle.headerRequiredText}>Obrigatório</Text>
                            </View>
                        </View>
                    </View>
                    <View style={mainStyle.customizeButtonsView}>
                        <RadioButton.Group value={calda} onValueChange={newValue => setCalda(newValue)}>
                            <View style={mainStyle.customizeRadioMain}>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>Sem calda</Text>
                                    <RadioButton.Item value = {"Nenhuma"} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>Morango</Text>
                                    <RadioButton.Item value = {"Morango"} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>Chocolate Suiço</Text>
                                    <RadioButton.Item value = {"Chocolate Suiço"} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>Leite Condensado</Text>
                                    <RadioButton.Item value = {"Leite Condensado"} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>Uva</Text>
                                    <RadioButton.Item value = {"Uva"} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>Menta</Text>
                                    <RadioButton.Item value = {"Menta"} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>Caramelo</Text>
                                    <RadioButton.Item value = {"Caramelo"} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>Tutti-frutti</Text>
                                    <RadioButton.Item value = {"Tutti-frutti"} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>Chocomenta</Text>
                                    <RadioButton.Item value = {"Chocomenta"} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>Ovomaltine</Text>
                                    <RadioButton.Item value = {"Ovomaltine"} style={mainStyle.radioOption}/>
                                </View>
                            </View>
                        </RadioButton.Group>
                    </View>
                    {/* Sabores */}
                    <View style={mainStyle.headers}>
                        <View style={mainStyle.headerView}>
                            <View>
                                <Text style={mainStyle.headerTitle}>Sabores</Text>
                                <Text style={mainStyle.headerSubtitle}>Escolha os sabores</Text>
                            </View>
                            <View style={mainStyle.headerRequired}>
                                <Text style={mainStyle.headerRequiredText}>Obrigatório</Text>
                            </View>
                        </View>
                    </View>
                    <View style={mainStyle.customizeButtonsView}>
                        <View style={mainStyle.customizeRadioMain}>
                            {sabores.map((sabor, index) => (
                                <View style={mainStyle.customizeRadioView}>
                                <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>{sabor.label}</Text>
                                <Checkbox.Item
                                    key={index}
                                    status={sabor.checked ? "checked" : "unchecked"}
                                    onPress={() => changeSabores(index)}
                                />
                                </View>
                            ))}
                        </View>
                    </View>
                    {/* Condimentos */}
                    <View style={mainStyle.headers}>
                        <View style={mainStyle.headerView}>
                            <View>
                                <Text style={mainStyle.headerTitle}>Condimentos</Text>
                                <Text style={mainStyle.headerSubtitle}>Escolha os condimentos</Text>
                            </View>
                            {/*<View style={mainStyle.headerRequired}>
                                <Text style={mainStyle.headerRequiredText}>Obrigatório</Text>
                            </View>*/}
                        </View>
                    </View>
                    <View style={mainStyle.customizeButtonsView}>
                        <View style={mainStyle.customizeRadioMain}>
                            {condimentos.map((condimento, index) => (
                                <View style={mainStyle.customizeRadioView}>
                                <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>{condimento.label}</Text>
                                <Checkbox.Item
                                    key={index}
                                    status={condimento.checked ? "checked" : "unchecked"}
                                    onPress={() => changeCondimentos(index)}
                                />
                                </View>
                            ))}
                        </View>
                    </View>
                    {/* Adicionais */}
                    <View style={mainStyle.headers}>
                        <View style={mainStyle.headerView}>
                            <View>
                                <Text style={mainStyle.headerTitle}>Adicionais</Text>
                                <Text style={mainStyle.headerSubtitle}>Escolha os adicionais</Text>
                            </View>
                        </View>
                    </View>
                    <View style={mainStyle.customizeButtonsView}>
                        <View style={mainStyle.customizeRadioMain}>
                            {adicionais.map((adicional, index) => (
                                <View style={mainStyle.customizeRadioView}>
                                <Text style={mainStyle.radioTitle}>{adicional.label}</Text>
                                <Text style={mainStyle.radioSubtitle}>+ {(adicional.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                                <Checkbox.Item
                                    key={index}
                                    status={adicional.checked ? "checked" : "unchecked"}
                                    onPress={() => changeAdicionais(index)}
                                />
                                </View>
                            ))}
                        </View>
                    </View>
                    <View style={mainStyle.observationMain}>
                        <View style={mainStyle.observationHeader}>
                            <View style={mainStyle.observationHeaderFlex}>
                                <Image source={require("../../images/observacao.png")} style={mainStyle.observationIcon}></Image>
                                <Text style={mainStyle.observationText}>Observação:</Text>
                            </View>
                            <View>
                                <Text id="observation-text" style={mainStyle.observationSize}>{observation.length}/{observationMax}</Text>
                            </View>
                        </View>
                        <View style={mainStyle.observationArticle}>
                            <TextInput maxLength={observationMax} multiline={true} numberOfLines={4} placeholder="Obsevações" value={observation} onChangeText={(text) => {changeObservation(text)}} style={mainStyle.observationTextarea} theme={{fonts: {regular: "Poppins-Regular"}}}></TextInput>
                        </View>
                    </View>
                    <View style={mainStyle.cartView}>
                        <TouchableOpacity onPress={() => {enviarPedido()}} style={mainStyle.cartButton}>
                            <Text style={[mainStyle.cartButtonText]}>Adicionar ao carrinho</Text>
                            <Text style={[mainStyle.cartButtonText]}>{(price.total).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};