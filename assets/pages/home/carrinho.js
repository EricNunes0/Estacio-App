import { Button, Text, View, Image, TouchableOpacity } from "react-native";
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
    pedido.push({
        type: "Açaí",
        price: 16.00,
        size: 300,
        calda: "Morango",
        condimentos: ["Paçoca"],
        adicionais: ["Nutella"],
        observation: ""
    });
    return (
        <View>
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
                        <View>
                            <Text>{produto.size}ml</Text>
                            <Text>{produto.calda}</Text>
                            <Text>{produto.condimentos}</Text>
                            <Text>{produto.adicionais}</Text>
                            <Text>{produto.observation}</Text>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
}