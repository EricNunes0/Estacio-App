import { useState, useEffect } from "react";
import { Text, View, Alert, Button, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { mainStyle } from "../../styles/main";
import { Checkbox, RadioButton, TextInput } from "react-native-paper";
import { addPedidoToCart } from "../../../functions/addPedidoToCart";
import uuid from "react-native-uuid";

export default function Acai() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState('');
    const [resources, setResources] = useState({});
    const [selects, setSelects] = useState({});
    const [prices, setPrices] = useState({});
    const [finalPrice, setFinalPrice] = useState(0);
    
    
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
            const resourcesString = await AsyncStorage.getItem("resources");
            let resourcesObject = JSON.parse(resourcesString);
            console.log(resourcesObject.acai)
            setResources(resourcesObject.acai);

            /* Configurando seleções */
            let newSelects = {}
            for(const key of Object.keys(resourcesObject.acai)) {
                newSelects[key] = resourcesObject.acai[key].default;
            }
            setSelects(newSelects);

            /* Configurando preços */
            let newPrices = {}
            for(const key of Object.keys(resourcesObject.acai)) {
                newPrices[key] = 0;
            }
            setPrices(newPrices);
            
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

    /* Função para alterar opções radio */
    const changeRadioResource = (resource, value) => {
        /* Alterando o valor em resources */
        let newResources = resources;
        newResources[resource].selected = value;
        let itemFound;
        for(const item of newResources[resource].items) {
            if(item.value === value) {
                item.checked = true;
                itemFound = item;
            } else {
                item.checked = false;
            }
        }
        setResources(newResources);

        /* Alterando o valor em selects */
        setSelects((prevState) => ({
            ...prevState,
            [resource]: value
        }));

        /* Alterando o preço total */
        let newPrices = prices;
        newPrices[resource] = parseFloat(itemFound.price);
        setPrices(newPrices);
        calculateFinalPrice();
    };

    /* Função para calcular preço total */
    const calculateFinalPrice = () => {
        let newPrices = prices;
        let newTotal = 0;
        for(const key of Object.keys(prices)) {
            newTotal += parseFloat(prices[key]);
        };
        setFinalPrice(newTotal);
        return newTotal;
    };

    /* Função para alterar opções checkbox */
    const changeCheckboxResource = (resource, value) => {
        /* Alterando o valor em resources */
        let newResources = resources;

        let itemFound;
        const checkedCount = selects[resource].length;
        console.log(checkedCount)

        for(const item of newResources[resource].items) {
            if(item.value === value) {
                if(item.checked === false) {
                    if(newResources[resource].max) {
                        if(checkedCount >= newResources[resource].max) {
                            return;
                        }
                    }
                    item.checked = true;
                    itemFound = item;
                } else {
                    item.checked = false;
                }
            }
            
        }
        setResources(newResources);

        /* Alterando o valor em selects */
        let newSelect = selects[resource];
        if(!newSelect.includes(value)) {
            newSelect.push(value);
        } else {
            newSelect = newSelect.filter((e) => e !== value);
        };
        setSelects((prevState) => ({
            ...prevState,
            [resource]: newSelect
        }));

        return; // Continuar aqui!!!!!!!!!!!!!!!

        /* Alterando o preço total */
        let newPrices = prices;
        newPrices[resource] = parseFloat(itemFound.price);
        setPrices(newPrices);
        calculateFinalPrice();
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
        calculateFinalPrice();
    };

    const observationMax = 140;
    const changeObservation = (text) => {
        setObservation(text);
    }

    const pedido = {
        id: uuid.v4(),
        createdAt: new Date().getTime(),
        type: 0, /* 0 = Açaí, 1 = Sorvete */
        /*price: price.total,*/
        count: 1,
        /*tamanho: size,*/
        /*calda: calda,*/
        /*sabores: sabores.filter((sabor) => sabor.checked).map((sabor) => sabor.label),*/
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
                    {Object.keys(resources).map((resource) => (
                        <>
                            <View style={mainStyle.headers}>
                                <View style={mainStyle.headerView}>
                                    <View>
                                        <Text style={mainStyle.headerTitle}>{resources[resource].title}</Text>
                                        <Text style={mainStyle.headerSubtitle}>{resources[resource].description}</Text>
                                    </View>
                                    {resources[resource].required === true ? (
                                        <View style={mainStyle.headerRequired}>
                                            <Text style={mainStyle.headerRequiredText}>Obrigatório</Text>
                                        </View>
                                        ) : (
                                            <></>
                                        )
                                    }
                                </View>
                            </View>
                            <View style={mainStyle.customizeButtonsView}>
                                {resources[resource].type === "radio" ? (
                                    <RadioButton.Group value={selects[resource]} onValueChange={(value) => {changeRadioResource(resource, value)}}>
                                        <View style={mainStyle.customizeRadioMain}>
                                            {resources[resource].items.map((item) => (
                                                <View style={mainStyle.customizeRadioView}>
                                                    {item.price !== 0 ? (
                                                        <>
                                                            <Text style={mainStyle.radioTitle}>{item.label}</Text>
                                                            <Text style={mainStyle.radioSubtitle}>{(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>{item.label}</Text>
                                                        </>
                                                    )}
                                                    <RadioButton.Item value = {item.value} style={mainStyle.radioOption}/>
                                                </View>
                                            ))}
                                        </View>
                                    </RadioButton.Group>
                                ) : (
                                    <View style={mainStyle.customizeRadioMain}>
                                        {resources[resource].items.map((item) => (
                                            <View style={mainStyle.customizeRadioView}>
                                            <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>{item.label}</Text>
                                            <Checkbox.Item
                                                key={item.label}
                                                status={selects[resource].includes(item.value) ? "checked" : "unchecked"}
                                                onPress={() => changeCheckboxResource(resource, item.value)}
                                            />
                                            </View>
                                        ))}
                                    </View>
                                )}
                            </View>
                        </>
                    ))}
                    {/* Condimentos */}
                    {/*<View style={mainStyle.headers}>
                        <View style={mainStyle.headerView}>
                            <View>
                                <Text style={mainStyle.headerTitle}>Condimentos</Text>
                                <Text style={mainStyle.headerSubtitle}>Escolha os condimentos</Text>
                            </View>
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
                    </View>*/}
                    {/* Adicionais */}
                    {/*<View style={mainStyle.headers}>
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
                    </View>*/}
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
                            <Text style={[mainStyle.cartButtonText]}>{(finalPrice).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};