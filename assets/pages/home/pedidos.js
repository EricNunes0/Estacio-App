import { useCallback, useEffect, useState } from "react";
import { Button, Image, Modal, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { pedidosStyle } from "../../styles/home/pedidos";
import { clearPedidos } from "../../../functions/clearPedidos";
import { getUserById } from "../../../functions/getUserById";
import { getUserByToken } from "../../../functions/getUserByToken";
import { getPaymentIcon } from "../../../functions/getPaymentIcon";
import { getPaymentName } from "../../../functions/getPaymentName";
import DeleteSVG from "../../svgs/settings/delete";
import PaymentMethodSVG from "../../svgs/payment/method";
import RightSVG from "../../svgs/settings/right";
import EmptySVG from "../../svgs/pedidos/empty";

export default function Pedidos() {
    const navigation = useNavigation();
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
                setUserAdmin(user.admin);
                let newPedidos = [];
                let newModals = [];
                const pedidosString = await AsyncStorage.getItem("pedidos");
                const pedidos = JSON.parse(pedidosString);
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
            console.log(e);
            alert(`Houve um erro: ${e}`);
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

    /* Deletar pedido */
    const deletePedido = async (id) => {
        let newPedidos = [];
        const pedidosString = await AsyncStorage.getItem("pedidos");
        const pedidos = JSON.parse(pedidosString);
        if(pedidos) {
            for(const pedido of pedidos) {
                if(pedido.id !== id) {
                    newPedidos.push(pedido);
                }
            };
        };
        await AsyncStorage.setItem("pedidos", JSON.stringify(newPedidos));
        setUserPedidos(newPedidos);
        setModalVisible(false);
        setCurrentPedido(0);
    };

    return (
        <ScrollView>
            <View style = {pedidosStyle.container}>
                {userPedidos.length !== 0 ? (
                    <View style = {pedidosStyle.pedidosMain}>
                        {userPedidos.map((pedido) => (
                            <TouchableOpacity onPress={() => {selectPedido(pedido.id)}} style = {pedidosStyle.pedidosViews} key={pedido.id}>
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
                                        <PaymentMethodSVG icon = {pedido.payment}></PaymentMethodSVG>
                                        <Text style = {pedidosStyle.pedidosPrice}>{pedido.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Text>
                                    </View>
                                </View>
                                <RightSVG></RightSVG>
                            </TouchableOpacity>
                        ))}
                        <View style = {pedidosStyle.modalMain}>
                            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}} style = {pedidosStyle.modals}>
                                <ScrollView>
                                    <View style={pedidosStyle.modalView}>
                                        <View style={pedidosStyle.modalView}>
                                            <View style = {pedidosStyle.modalHeader}>
                                                {userAdmin === true ? (
                                                    <View style = {pedidosStyle.modalHeaderAdmin}>
                                                        <View>
                                                            <Text style={pedidosStyle.modalHeaderText}>Pedido por {currentUser.name}</Text>
                                                        </View>
                                                        <View>
                                                            <TouchableOpacity onPress={() => {deletePedido(userPedidos[currentPedido].id)}} style = {pedidosStyle.modalHeaderAdminButton}>
                                                                <DeleteSVG></DeleteSVG>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                ): (
                                                    <Text style={pedidosStyle.modalHeaderText}>Pedido Nº {currentPedido + 1}</Text>
                                                )}
                                            </View>
                                            <View style = {pedidosStyle.modalProdutosMain}>
                                                {userPedidos[currentPedido].pedidos.map((produto) => (
                                                    <View style = {pedidosStyle.modalProdutosArticle}>
                                                        <View style = {pedidosStyle.modalProdutosView}>
                                                            <View style = {pedidosStyle.modalProdutosCountView}>
                                                                <Text style = {pedidosStyle.modalProdutosCount}>{produto.count}x</Text>
                                                            </View>
                                                            <View style = {pedidosStyle.modalProdutosDetailsMain}>
                                                                <View style = {pedidosStyle.modalProdutosDetailsFlex}>
                                                                    <Text style = {pedidosStyle.modalProdutoTitle}>{getType(produto.type)} {produto.tamanho}ml</Text>
                                                                    <View style = {pedidosStyle.modalProdutosDetailsView}>
                                                                        <Text style = {pedidosStyle.h6}>Calda</Text>
                                                                        <Text style = {pedidosStyle.modalProdutoContent}>{produto.calda}</Text>
                                                                    </View>
                                                                    <View style = {pedidosStyle.modalProdutosDetailsView}>
                                                                        <Text style = {pedidosStyle.h6}>Sabores</Text>
                                                                        <Text style = {pedidosStyle.modalProdutoContent}>{produto.sabores.join("\n")}</Text>
                                                                    </View>
                                                                    <View style = {pedidosStyle.modalProdutosDetailsView}>
                                                                        <Text style = {pedidosStyle.h6}>Condimentos</Text>
                                                                        <Text style = {pedidosStyle.modalProdutoContent}>{produto.condimentos.join("\n")}</Text>
                                                                    </View>
                                                                    <View style = {pedidosStyle.modalProdutosDetailsView}>
                                                                        <Text style = {pedidosStyle.h6}>Adicionais</Text>
                                                                        <Text style = {pedidosStyle.modalProdutoContent}>{produto.adicionais.join("\n")}</Text>
                                                                    </View>
                                                                </View>
                                                                <View style = {pedidosStyle.modalProdutoPriceView}>
                                                                    <Text style = {pedidosStyle.modalProdutoPrice}>{(produto.price * produto.count).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style = {pedidosStyle.modalProdutoFooter}>
                                                            <View>
                                                                <Text style = {pedidosStyle.h6}>Forma de pagamento</Text>
                                                                <View style = {pedidosStyle.modalProdutoFooterPayment}>
                                                                    <PaymentMethodSVG icon = {userPedidos[currentPedido].payment}></PaymentMethodSVG>
                                                                    <Text style = {pedidosStyle.p}>{getPaymentName(userPedidos[currentPedido].payment)}</Text>
                                                                </View>
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
                            <EmptySVG></EmptySVG>
                        </View>
                        <View style = {pedidosStyle.emptyTextsView}>
                            <Text style = {pedidosStyle.emptyTitle}>Nenhum</Text>
                            <Text style = {pedidosStyle.emptySubtitle}>Você ainda não fez nenhum pedido</Text>
                        </View>
                        <TouchableOpacity onPress={() => {navigation.navigate("Fazer pedido")}} style = {pedidosStyle.emptyButton}>
                            <Text style = {pedidosStyle.emptyButtonText}>Fazer pedido</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ScrollView>
    );
}