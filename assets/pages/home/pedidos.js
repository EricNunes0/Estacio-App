import { useState, useEffect } from "react";
import { Button, Modal, Pressable, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { pedidosStyle } from "../../styles/pedidos";

export default function Pedidos() {
    const [userId, setUserId] = useState('');
    const [userPedidos, setUserPedidos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

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
                let newPedidos = [];
                const pedidos = JSON.parse(await AsyncStorage.getItem("pedidos"));
                for(const pedido of pedidos) {
                    if(pedido.userId === usersArray[i].id) {
                        newPedidos.push(pedido);
                    }
                };
                console.log(newPedidos)
                setUserPedidos(newPedidos);
            } else {
                alert(`Não existe um token: ${tokenJSON}`);
            }
        } catch (e) {
            alert(`Não foi possível obter o token: ${e}`);
        }
    };

    /* Função para obter nome com o tipo de pedido */
    const getType = (type) => {
        let name = "";
        if(type === 0) {
            name = "Açaí";
        } else if(type === 1) {
            name = "Sorvete";
        } else {
            name = "Outro";
        }
        return name;
    };

    return (
        <View style = {pedidosStyle.container}>
            {userPedidos.length !== 0 ? (
                <View style = {pedidosStyle.pedidosMain}>
                    {userPedidos.map((pedido) => (
                        <TouchableOpacity onPress={() => {setModalVisible(!modalVisible)}} style = {pedidosStyle.pedidosViews}>
                            <View style = {pedidosStyle.pedidosDateView}>
                                <View style = {pedidosStyle.pedidosDateSquare}>
                                    <Text style = {pedidosStyle.pedidosDateDay}>{new Date(pedido.createdAt).getDate()}</Text>
                                    <Text style = {pedidosStyle.pedidosDateMonth}>{new Date(pedido.createdAt).toLocaleString("default", {month: "long"}).substring(0, 3)}</Text>
                                </View>
                            </View>
                            <View style = {pedidosStyle.pedidosDetailsView}>
                                <View style = {pedidosStyle.pedidosProductsView}>
                                    {pedido.pedidos.map((produto) => (
                                        <View>
                                            <Text>{produto.count}x - {getType(produto.type)} {produto.tamanho}ml ({produto.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})})</Text>
                                        </View>
                                    ))}
                                </View>
                                <View style = {pedidosStyle.pedidosPriceView}>
                                    <Text style = {pedidosStyle.pedidosPrice}>{pedido.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Text>
                                </View>
                                <View style = {pedidosStyle.modalMain}>
                                    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible); }} style = {pedidosStyle.modals}>
                                        <View style={pedidosStyle.modalView}>
                                            <View style={pedidosStyle.modalView}>
                                                <View style = {pedidosStyle.modalHeader}>
                                                    <Text style={pedidosStyle.modalHeaderText}>Pedido Nº {1}</Text>
                                                </View>
                                                <View style = {pedidosStyle.modalProdutosMain}>
                                                    {pedido.pedidos.map((produto) => (
                                                        <View style = {pedidosStyle.modalProdutosView}>
                                                            <View style = {pedidosStyle.modalProdutosCountView}>
                                                                <Text style = {pedidosStyle.modalProdutosCount}>{produto.count}x</Text>
                                                            </View>
                                                            <View style = {pedidosStyle.modalProdutosDetailsMain}>
                                                                <View style = {pedidosStyle.modalProdutosDetailsFlex}>
                                                                    <Text style = {pedidosStyle.modalProdutoTitle}>{getType(produto.type)} {produto.tamanho}ml</Text>
                                                                    <View style = {pedidosStyle.modalProdutosDetailsView}>
                                                                        <Text style = {pedidosStyle.modalProdutoSubtitle}>Calda</Text>
                                                                        <Text style = {pedidosStyle.modalProdutoContent}>{produto.calda}</Text>
                                                                    </View>
                                                                    <View style = {pedidosStyle.modalProdutosDetailsView}>
                                                                        <Text style = {pedidosStyle.modalProdutoSubtitle}>Sabores</Text>
                                                                        <Text style = {pedidosStyle.modalProdutoContent}>{produto.sabores.join("\n")}</Text>
                                                                    </View>
                                                                    <View style = {pedidosStyle.modalProdutosDetailsView}>
                                                                        <Text style = {pedidosStyle.modalProdutoSubtitle}>Condimentos</Text>
                                                                        <Text style = {pedidosStyle.modalProdutoContent}>{produto.condimentos.join("\n")}</Text>
                                                                    </View>
                                                                    <View style = {pedidosStyle.modalProdutosDetailsView}>
                                                                        <Text style = {pedidosStyle.modalProdutoSubtitle}>Adicionais</Text>
                                                                        <Text style = {pedidosStyle.modalProdutoContent}>{produto.adicionais.join("\n")}</Text>
                                                                    </View>
                                                                </View>
                                                                <View style = {pedidosStyle.modalProdutoPriceView}>
                                                                    <Text>{produto.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    ))}
                                                </View>
                                                <Pressable style={[pedidosStyle.button, pedidosStyle.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
                                                <Text style={pedidosStyle.textStyle}>Fechar</Text>
                                                </Pressable>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            ) : (
                <View>
                    <Text>Não há pedidos</Text>
                </View>
            )}
        </View>
    );
}