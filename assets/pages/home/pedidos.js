import { useCallback, useEffect, useState } from "react";
import { Button, Image, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { pedidosStyle } from "../../styles/home/pedidos";
import { clearPedidos } from "../../../functions/clearPedidos";
import { getUserById } from "../../../functions/getUserById";
import { getUserByToken } from "../../../functions/getUserByToken";

export default function Pedidos() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState('');
    const [userAdmin, setUserAdmin] = useState(false);
    const [userPedidos, setUserPedidos] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [currentPedido, setCurrentPedido] = useState(0);
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        getPedidos();
    }, []);

    useFocusEffect(
        useCallback(() => {
            getPedidos();
            return () => {
            };
        }, [])
    );
    
    const getPedidos = async () => {
        try {
            const tokenString = await AsyncStorage.getItem("token");
            if(tokenString) {
                let user = await getUserByToken(tokenString);
                setUserId(user.id);
                setUserAdmin(user.admin);

                let newPedidos = [];
                let newModals = [];

                const pedidos = JSON.parse(await AsyncStorage.getItem("pedidos"));
                if(pedidos) {
                    
                    if(user.admin === true) {
                        for(const pedido of pedidos) {
                            newPedidos.push(pedido);
                            newModals.push({id: pedido.id, visible: false});
                        };
                    } else {
                        for(const pedido of pedidos) {
                            if(pedido.userId === user.id) {
                                newPedidos.push(pedido);
                                newModals.push({id: pedido.id, visible: false})
                            }
                        };
                    };
                };
                setUserPedidos(newPedidos);
                setCurrentPedido(0);
            } else {
                alert(`Não existe um token: ${tokenString}`);
            }
        } catch (e) {
            console.log(e)
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

    const selectPedido = async (id) => {
        setModalVisible(!modalVisible);
        let i = 0;
        for(const pedido of userPedidos) {
            if(pedido.id === id) {
                break;
            } else {
                i++;
            }
        }
        setCurrentPedido(i);
        setCurrentUser(await getUserById(userPedidos[i].userId));
    };

    return (
        <ScrollView>
            <View style = {pedidosStyle.container}>
                {userPedidos.length !== 0 ? (
                    <View style = {pedidosStyle.pedidosMain}>
                        {userPedidos.map((pedido) => (
                            <TouchableOpacity onPress={() => {selectPedido(pedido.id)}} style = {pedidosStyle.pedidosViews}>
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
                                                <Text style = {pedidosStyle.pedidosProductsText}>{produto.count}x - {getType(produto.type)} {produto.tamanho}ml ({produto.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})})</Text>
                                            </View>
                                        ))}
                                    </View>
                                    <View style = {pedidosStyle.pedidosPriceView}>
                                        <Text style = {pedidosStyle.pedidosPrice}>{pedido.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Text>
                                    </View>
                                </View>
                                <Image style = {pedidosStyle.pedidosArrow} source = {require("../../svgs/settings/right.svg")}></Image>
                            </TouchableOpacity>
                        ))}
                        <View style = {pedidosStyle.modalMain}>
                            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}} style = {pedidosStyle.modals}>
                                <ScrollView>
                                    <View style={pedidosStyle.modalView}>
                                        <View style={pedidosStyle.modalView}>
                                            <View style = {pedidosStyle.modalHeader}>
                                                {userAdmin === true ? (
                                                    <Text style={pedidosStyle.modalHeaderText}>Pedido por {currentUser.name}</Text>
                                                ): (
                                                    <Text style={pedidosStyle.modalHeaderText}>Pedido Nº {currentPedido + 1}</Text>
                                                )}
                                            </View>
                                            <View style = {pedidosStyle.modalProdutosMain}>
                                                {userPedidos[currentPedido].pedidos.map((produto) => (
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
                                                                <Text style = {pedidosStyle.modalProdutoPrice}>{(produto.price * produto.count).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Text>
                                                            </View>
                                                        </View>
                                                    </View>
                                                ))}
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                                <View style={pedidosStyle.modalCloseButtonView}>
                                    <Pressable style={pedidosStyle.modalCloseButton} onPress={() => setModalVisible(!modalVisible)}>
                                        <Text style={pedidosStyle.modalCloseButtonText}>Fechar</Text>
                                    </Pressable>
                                </View>
                            </Modal>
                        </View>
                    </View>
                ) : (
                    <View style = {pedidosStyle.emptyContainer}>
                        <View style = {pedidosStyle.emptyIconView}>
                            <Image source={require("../../svgs/pedidos/empty.svg")} style = {pedidosStyle.emptyIcon}></Image>
                        </View>
                        <View style = {pedidosStyle.emptyTextsView}>
                            <Text style = {pedidosStyle.emptyTitle}>Nenhum</Text>
                            <Text style = {pedidosStyle.emptySubtitle}>Você ainda não fez nenhum pedido</Text>
                        </View>
                        <TouchableOpacity onPress={() => {navigation.navigate("Fazer pedido")}} style = {pedidosStyle.emptyButton}>Fazer pedido</TouchableOpacity>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}