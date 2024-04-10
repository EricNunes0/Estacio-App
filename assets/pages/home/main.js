import { useState } from "react";
import { Text, View, Alert, Button, Image, ImageBackground, TouchableOpacity, ScrollView } from "react-native";
import { mainStyle } from "../../styles/main";
import { Checkbox, RadioButton } from "react-native-paper";

export default function Category() {
    const [size, setSize] = useState(300);
    const [calda, setCalda] = useState("Nenhuma");
    const [saborMorango, setSaborMorango] = useState(false);
    const [saborMaracuja, setSaborMaracuja] = useState(false);
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
    
    /* Função para alterar os condimentos */
    const changeCondimentos = (index) => {
        const newCondimentos = [...condimentos];
        newCondimentos[index].checked = !newCondimentos[index].checked;
        setCondimentos(newCondimentos);
    };
    
    /* Função para alterar os condimentos */
    const changeAdicionais = (index) => {
        const newAdicionais = [...adicionais];
        newAdicionais[index].checked = !newAdicionais[index].checked;
        setAdicionais(newAdicionais);
    };
    console.log({
        tamanho: size,
        calda: calda,
        saborMorango: saborMorango,
        saborMaracuja: saborMaracuja,
        condimentos: condimentos,
        adicionais: adicionais
    });
    return (
        <ScrollView>
            <View style={mainStyle.container}>
                <View style={mainStyle.header}>
                    <View style={mainStyle.headerBackgroundView}>
                        <ImageBackground source={require("../../images/açai_background.png")} style={mainStyle.headerBackground}></ImageBackground>
                    </View>
                    <View style={mainStyle.headerContentView}>
                        <Text style={mainStyle.headerContentTitle}>Açaí Zero Grau</Text>
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
                            <View style={mainStyle.customizeRadioView}>
                                <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>Morango</Text>
                                <Checkbox.Item status={saborMorango ? "checked" : "unchecked"} onPress={() => setSaborMorango(!saborMorango)} style={mainStyle.radioOption}/>
                            </View>
                            <View style={mainStyle.customizeRadioView}>
                                <Text style={[mainStyle.radioTitle, mainStyle.radioTitleCenter]}>Maracujá</Text>
                                <Checkbox.Item status={saborMaracuja ? "checked" : "unchecked"} onPress={() => setSaborMaracuja(!saborMaracuja)} style={mainStyle.radioOption}/>
                            </View>
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
                </View>
            </View>
        </ScrollView>
    );
};