import { useState } from "react";
import { Text, View, Alert, Button, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { mainStyle } from "../../styles/main";
import { Checkbox, RadioButton } from "react-native-paper";

export default function IceCream() {
    const [size, setSize] = useState(300);
    const [calda, setCalda] = useState("Nenhuma");
    const [sabores, setSabores] = useState([
        {label: "Flocos", checked: false},
        {label: "Blue Ice", checked: false},
        {label: "Ninhotella", checked: false},
        {label: "Mousse de Maracujá", checked: false},
        {label: "Iogurte Grego", checked: false},
        {label: "Passas ao Rum", checked: false}
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
    const [frutas, setFrutas] = useState([
        {label: "Manga", subtitle: "+ R$2,00", checked: false},
        {label: "Abacaxi", subtitle: "+ R$2,00", checked: false}
    ]);
    const [adicionais, setAdicionais] = useState([
        {label: "Nutella (30ml)", subtitle: "+ R$4,00", checked: false},
        {label: "Leite Condensado (30ml)", subtitle: "+ R$2,00", checked: false},
        {label: "Kitkat em barra", subtitle: "+ R$5,00", checked: false}
    ]);
    
    /* Função para alterar os sabores */
    const changeSabores = (index) => {
        const newSabores = [...sabores];
        const checkedCount = newSabores.filter(cb => cb.checked).length;

        if (checkedCount < 2 || newSabores[index].checked === true) {
            newSabores[index].checked = !newSabores[index].checked;
            setSabores(newSabores);
        } else {
            Alert.alert('Limite de seleção atingido', 'Você só pode selecionar até 2 sabores.');
        }
    };
    
    /* Função para alterar os condimentos */
    const changeCondimentos = (index) => {
        const newCondimentos = [...condimentos];
        newCondimentos[index].checked = !newCondimentos[index].checked;
        setCondimentos(newCondimentos);
    };
    
    /* Função para alterar as frutas */
    const changeFrutas = (index) => {
        const newFrutas = [...frutas];
        newFrutas[index].checked = !newFrutas[index].checked;
        setFrutas(newFrutas);
    };
    
    /* Função para alterar os adicionais */
    const changeAdicionais = (index) => {
        const newAdicionais = [...adicionais];
        newAdicionais[index].checked = !newAdicionais[index].checked;
        setAdicionais(newAdicionais);
    };
    return (
        <ScrollView>
            <View style={mainStyle.container}>
                <View style={mainStyle.header}>
                    <View style={mainStyle.headerBackgroundView}>
                        <ImageBackground source={require("../../images/icecream_background.png")} style={mainStyle.headerBackground}></ImageBackground>
                    </View>
                    <View style={mainStyle.headerContentView}>
                        <Text style={mainStyle.headerContentTitle}>Sorvete</Text>
                        <Text style={mainStyle.headerContentSubtitle}>O melhor sorvete da região</Text>
                        <Text style={mainStyle.headerContentSubtitle}>Mais saboroso e mais leve!</Text>
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
                            </View>
                        </RadioButton.Group>
                    </View>
                    {/* Sabores */}
                    <View style={mainStyle.headers}>
                        <View style={mainStyle.headerView}>
                            <View>
                                <Text style={mainStyle.headerTitle}>Sabores</Text>
                                <Text style={mainStyle.headerSubtitle}>Escolha até 2 sabores</Text>
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
                    {/* Frutas */}
                    <View style={mainStyle.headers}>
                        <View style={mainStyle.headerView}>
                            <View>
                                <Text style={mainStyle.headerTitle}>Frutas</Text>
                                <Text style={mainStyle.headerSubtitle}>Escolha as frutas</Text>
                            </View>
                            {/*<View style={mainStyle.headerRequired}>
                                <Text style={mainStyle.headerRequiredText}>Obrigatório</Text>
                            </View>*/}
                        </View>
                    </View>
                    <View style={mainStyle.customizeButtonsView}>
                        <View style={mainStyle.customizeRadioMain}>
                            {frutas.map((fruta, index) => (
                                <View style={mainStyle.customizeRadioView}>
                                <Text style={mainStyle.radioTitle}>{fruta.label}</Text>
                                <Text style={mainStyle.radioSubtitle}>{fruta.subtitle}</Text>
                                <Checkbox.Item
                                    key={index}
                                    status={fruta.checked ? "checked" : "unchecked"}
                                    onPress={() => changeFrutas(index)}
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
                </View>
            </View>
        </ScrollView>
    );
};