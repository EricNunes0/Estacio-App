import { useState } from "react";
import { Text, View, Alert, Button, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { mainStyle } from "../../styles/main";
import { Checkbox, RadioButton, TextInput } from "react-native-paper";

export default function Category() {
    const [size, setSize] = useState(0);
    const [calda, setCalda] = useState(null);
    const [sabores, setSabores] = useState([
        {label: "Natural", checked: false},
        {label: "Banana", checked: false},
        {label: "Morango", checked: false}
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
        {label: "Nutella (30ml)", subtitle: "+ R$4,00", checked: false},
        {label: "Leite Condensado (30ml)", subtitle: "+ R$2,00", checked: false},
        {label: "Kitkat em barra", subtitle: "+ R$5,00", checked: false}
    ]);
    const [observation, setObservation] = useState("");
    
    /* Função para alterar os sabores */
    const changeSabores = (index) => {
        const newSabores = [...sabores];
        newSabores[index].checked = !newSabores[index].checked;
        setSabores(newSabores);
    };
    
    /* Função para alterar os condimentos */
    const changeCondimentos = (index) => {
        const newCondimentos = [...condimentos];
        newCondimentos[index].checked = !newCondimentos[index].checked;
        setCondimentos(newCondimentos);
    };
    
    /* Função para alterar os adicionais */
    const changeAdicionais = (index) => {
        const newAdicionais = [...adicionais];
        newAdicionais[index].checked = !newAdicionais[index].checked;
        setAdicionais(newAdicionais);
    };

    const observationMax = 140;
    const changeObservation = (text) => {
        setObservation(text);
    }

    const pedido = JSON.stringify({
        tamanho: size,
        calda: calda,
        sabores: sabores,
        condimentos: condimentos,
        adicionais: adicionais
    });
    /* Função para enviar o pedido */
    const enviarPedido = async () => {
        try {
            console.log(pedido)
            await AsyncStorage.setItem("Pedido", pedido);
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
                        <RadioButton.Group value={size} onValueChange={newValue => setSize(newValue)}>
                            <View style={mainStyle.customizeRadioMain}>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={mainStyle.radioTitle}>300ml</Text>
                                    <Text style={mainStyle.radioSubtitle}>R$14,00</Text>
                                    <RadioButton.Item /*label = "300ml"*/ value = {300} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={mainStyle.radioTitle}>400ml</Text>
                                    <Text style={mainStyle.radioSubtitle}>R$16,00</Text>
                                    <RadioButton.Item /*label = "400ml"*/ value = {400} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={mainStyle.radioTitle}>500ml</Text>
                                    <Text style={mainStyle.radioSubtitle}>R$18,00</Text>
                                    <RadioButton.Item /*label = "500ml"*/ value = {500} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={mainStyle.radioTitle}>770ml</Text>
                                    <Text style={mainStyle.radioSubtitle}>R$22,00</Text>
                                    <RadioButton.Item /*label = "770ml"*/ value = {770} style={mainStyle.radioOption}/>
                                </View>
                                <View style={mainStyle.customizeRadioView}>
                                    <Text style={mainStyle.radioTitle}>1 Litro</Text>
                                    <Text style={mainStyle.radioSubtitle}>R$33,00</Text>
                                    <RadioButton.Item /*label = "1l"*/ value = {1000} style={mainStyle.radioOption}/>
                                </View>
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
                            {/*<View style={mainStyle.headerRequired}>
                                <Text style={mainStyle.headerRequiredText}>Obrigatório</Text>
                            </View>*/}
                        </View>
                    </View>
                    <View style={mainStyle.customizeButtonsView}>
                        <View style={mainStyle.customizeRadioMain}>
                            {adicionais.map((adicional, index) => (
                                <View style={mainStyle.customizeRadioView}>
                                <Text style={mainStyle.radioTitle}>{adicional.label}</Text>
                                <Text style={mainStyle.radioSubtitle}>{adicional.subtitle}</Text>
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
                            <TextInput maxLength={observationMax} multiline={true} numberOfLines={4} placeholder="Obsevações" value={observation} onChangeText={(text) => {changeObservation(text)}} style={mainStyle.observationTextarea}></TextInput>
                        </View>
                    </View>
                    <View style={mainStyle.cartView}>
                        <TouchableOpacity onPress={() => {enviarPedido()}} style={mainStyle.cartButton}>
                            <Text style={[mainStyle.cartButtonText]}>Adicionar ao carrinho</Text>
                            <Text style={[mainStyle.cartButtonText]}>R$ 0,00</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};