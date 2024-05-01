import { Button, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { carrinhoStyle } from "../../styles/carrinho";

export default function Carrinho() {
    const receberPedido = async () => {
        try {
            let pedido = await AsyncStorage.getItem("Pedido");
            console.log(pedido);
        } catch(e) {
            console.error(e);
        }
    }

    let pedido = [];
    
    pedido = [
        {
            type: "Açaí",
            price: 16.00,
            size: 300,
            sabores: ["Natural"],
            calda: "Morango",
            condimentos: ["Paçoca"],
            adicionais: ["Nutella"],
            observation: ""
        },
        {
            type: "Açaí",
            price: 22.00,
            size: 500,
            sabores: ["Morango", "Banana"],
            calda: "Chocolate",
            condimentos: ["Paçoca", "Amendoim"],
            adicionais: [],
            observation: ""
        },
        {
            type: "Sorvete",
            price: 22.00,
            size: 500,
            sabores: ["Blue Ice", "Ninhotella"],
            calda: "Chocolate Suiço",
            condimentos: ["Granola", "Leite em pó", "Jujuba"],
            adicionais: ["Nutella", "Leite Condensado"],
            observation: ""
        }
    ]

    return (
        <ScrollView>
            <View style={carrinhoStyle.container}>
                <Text style={carrinhoStyle.title}>Itens adicionados</Text>
                <View style={carrinhoStyle.pedidoView}>
                    {pedido.map((produto) => (
                        <View style={carrinhoStyle.produtoView}>
                            <View style={carrinhoStyle.produtoHeader}>
                                <View style={carrinhoStyle.produtoIconView}>
                                    <Image source={produto.type === "Açaí" ? require(`../../../assets/images/acai_cart.png`) : require(`../../../assets/images/icecream_cart.png`)} style={carrinhoStyle.produtoIcon}></Image>
                                </View>
                                <View style={carrinhoStyle.produtoTitleView}>
                                    <View style={carrinhoStyle.produtoPriceView}>
                                        <Text style={carrinhoStyle.produtoName}>{produto.type}</Text>
                                        <Text style={carrinhoStyle.produtoPrice}>{produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL',})}</Text>
                                    </View>
                                    <View style={carrinhoStyle.produtoButtonView}>
                                        <View style={carrinhoStyle.produtoButtonBox}>
                                            <TouchableOpacity style={[carrinhoStyle.produtoButtonOptions]}>
                                                <Image style={[carrinhoStyle.produtoButtonOptionsIcons]} source={require(`../../../assets/svgs/red_trash.svg`)}></Image>
                                            </TouchableOpacity>
                                            <Text style={carrinhoStyle.produtoButtonCounter}>0</Text>
                                            <TouchableOpacity style={[carrinhoStyle.produtoButtonOptions]}>
                                            <Image style={[carrinhoStyle.produtoButtonOptionsIcons]} source={require(`../../../assets/svgs/red_plus.svg`)}></Image>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={carrinhoStyle.produtoMain}>
                                <View style={carrinhoStyle.produtoArticle}>
                                    <View style={carrinhoStyle.produtoDetails}>
                                        <View style={carrinhoStyle.produtoInfos}>
                                            <View style={carrinhoStyle.produtoCounterCircle}>
                                                <Image source={require(`../../../assets/svgs/cart/size.svg`)} style={carrinhoStyle.produtoCounterIcon}/>
                                            </View>
                                            <View style={carrinhoStyle.produtoTextView}>
                                                <Text style={carrinhoStyle.produtoText}>{produto.size}ml</Text>
                                            </View>
                                        </View>
                                        <View style={carrinhoStyle.produtoInfos}>
                                            <View style={carrinhoStyle.produtoCounterCircle}>
                                                <Image source={require(`../../../assets/svgs/cart/flavor.svg`)} style={carrinhoStyle.produtoCounterIcon}/>
                                            </View>
                                            <View style={carrinhoStyle.produtoTextView}>
                                                <Text style={carrinhoStyle.produtoText}>{produto.sabores.join(", ")}</Text>
                                            </View>
                                        </View>
                                        <View style={carrinhoStyle.produtoInfos}>
                                            <View style={carrinhoStyle.produtoCounterCircle}>
                                                <Image source={require(`../../../assets/svgs/cart/syrup.svg`)} style={carrinhoStyle.produtoCounterIcon}/>
                                            </View>
                                            <View style={carrinhoStyle.produtoTextView}>
                                                <Text style={carrinhoStyle.produtoText}>{produto.calda || "Sem calda"}</Text>
                                            </View>
                                        </View>
                                        <View style={carrinhoStyle.produtoInfos}>
                                            <View style={carrinhoStyle.produtoCounterCircle}>
                                                <Image source={require(`../../../assets/svgs/cart/condimento.svg`)} style={carrinhoStyle.produtoCounterIcon}/>
                                            </View>
                                            <View style={carrinhoStyle.produtoTextView}>
                                                <Text style={carrinhoStyle.produtoText}>{produto.condimentos || "Sem condimentos"}</Text>
                                            </View>
                                        </View>
                                        <View style={carrinhoStyle.produtoInfos}>
                                            <View style={carrinhoStyle.produtoCounterCircle}>
                                                <Image source={require(`../../../assets/svgs/cart/extra.svg`)} style={carrinhoStyle.produtoCounterIcon}/>
                                            </View>
                                            <View style={carrinhoStyle.produtoTextView}>
                                                <Text style={carrinhoStyle.produtoText}>{produto.adicionais || "Sem adicionais"}</Text>
                                            </View>
                                        </View>
                                        <View style={carrinhoStyle.produtoInfos}>
                                            <View style={carrinhoStyle.produtoTextView}>
                                                <Text style={[carrinhoStyle.produtoText, carrinhoStyle.produtoObservation]}>{produto.observation || "Nenhuma observação"}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}