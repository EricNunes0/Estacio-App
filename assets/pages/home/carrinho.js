import { useCallback, useEffect, useState } from "react";
import { Button, Image, Modal, Text, TouchableOpacity, View, ScrollView } from "react-native";
import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { carrinhoStyle } from "../../styles/home/carrinho";
import { getUserByToken } from "../../../functions/getUserByToken";
import { removePedidosFromCart } from "../../../functions/removePedidosFromCart";

export default function Carrinho() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState('');
    const [userCart, setUserCart] = useState([]);
    const [price, setPrice] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const [payment, setPayment] = useState(undefined);
    const [modalVisible, setModalVisible] = useState(false);

    const paymentMethods = [
        {value: "credit", label: "Crédito", icon: require(`../../svgs/payment/credit.svg`)},
        {value: "debit", label: "Débito", icon: require(`../../svgs/payment/debit.svg`)},
        {value: "pix", label: "Pix", icon: require(`../../svgs/payment/pix.svg`)},
        {value: "cash", label: "Dinheiro", icon: require(`../../svgs/payment/cash.svg`)}
    ];

    useEffect(() => {
        getUserData();
    }, []);

    useFocusEffect(
        useCallback(() => {
            getUserData();
            return () => {
            };
        }, [])
      );
    
    const getUserData = async () => {
        try {
            const tokenString = await AsyncStorage.getItem("token");
            if(tokenString) {
                let user = await getUserByToken(tokenString);
                setUserId(user.id);
                setUserCart(user.cart);
                calculatePrice(user.cart);
            } else {
                navigation.navigate("Login");
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

    /* Função para calcular preço */
    function calculatePrice(cart) {
        let newPrice = 0;
        let cartToUse = cart ? cart : userCart;
        for(const produto of cartToUse) {
            newPrice += (produto.price * produto.count);
        };
        setPrice(newPrice);
        calculateItemCount(cart);
    };

    /* Função para calcular quantidade de itens */
    function calculateItemCount(cart) {
        let newItemCount = 0;
        let cartToUse = cart ? cart : userCart;
        for(const produto of cartToUse) {
            newItemCount += produto.count;
        };
        setItemCount(newItemCount);
    };

    /* Função para adicionar mais um pedido ao contador */
    const addCount = async (produtoId) => {
        try {
		    const usersString = await AsyncStorage.getItem("users");
            let usersArray = JSON.parse(usersString);
            let i = 0;
            for(let registeredUser of usersArray) {
                if(userId === registeredUser.id) {
                    let newUserCart = usersArray[i].cart || [];
                    let j = 0;
                    for(let pedido of newUserCart) {
                        if(pedido.id === produtoId) {
                            newUserCart[j].count += 1;
                            break;
                        } else {
                            j++;
                        };
                    };
                    usersArray[i].cart = newUserCart;
                    break;
                } else {
                    i++;
                }
            };
            setUserCart(usersArray[i].cart);
            await AsyncStorage.setItem("users", JSON.stringify(usersArray));
            calculatePrice(usersArray[i].cart);
        } catch(e) {
            console.error(e);
        }
    }

    /* Função para remover um pedido do carrinho do usuário */
    const removePedidoFromCart = async (produtoId) => {
        const usersString = await AsyncStorage.getItem("users");
        let usersArray = JSON.parse(usersString);
        let i = 0;
        for(let registeredUser of usersArray) {
            if(userId === registeredUser.id) {
                let newUserCart = usersArray[i].cart || [];
                let j = 0;
                for(let pedido of newUserCart) {
                    if(pedido.id === produtoId) {
                        newUserCart.splice(j, 1);
                        break;
                    } else {
                        j++;
                    };
                };
                usersArray[i].cart = newUserCart;
                break;
            } else {
                i++;
            }
        };
        setUserCart(usersArray[i].cart);
        await AsyncStorage.setItem("users", JSON.stringify(usersArray));
        calculatePrice(usersArray[i].cart);
    }

    /* Função para remover um pedido ao contador */
    const removeCount = async (produtoId) => {
        try {
		    const usersString = await AsyncStorage.getItem("users");
            let usersArray = JSON.parse(usersString);
            let i = 0;
            for(let registeredUser of usersArray) {
                if(userId === registeredUser.id) {
                    let newUserCart = usersArray[i].cart || [];
                    let j = 0;
                    for(let pedido of newUserCart) {
                        if(pedido.id === produtoId) {
                            newUserCart[j].count -= 1;
                            break;
                        } else {
                            j++;
                        };
                    };
                    usersArray[i].cart = newUserCart;
                    break;
                } else {
                    i++;
                }
            };
            setUserCart(usersArray[i].cart);
            await AsyncStorage.setItem("users", JSON.stringify(usersArray));
            calculatePrice(usersArray[i].cart);
        } catch(e) {
            console.error(e);
        }
    };

    /* Editar forma de pagamento */
    const paymentModalToggle = async () => {
        setModalVisible(!modalVisible);
    };

    /* Ao selecionar forma de pagamento */
    const paymentMethodSelect = async (value) => {
        setPayment(value);
        setModalVisible(false);
    };

    /* Obter nome do método de pagamento */
    const getPaymentMethodLabel = (payment) => {
        for(const paymentMethod of paymentMethods) {
            if(paymentMethod.value === payment) {
                return paymentMethod.label;
            };
        };
    };

    /* Função para confirmar o pedido */
    const confirmRequest = async () => {
        try {
		    const pedidosString = await AsyncStorage.getItem("pedidos");
            let pedidosArray = pedidosString ? JSON.parse(pedidosString) : [];
            let pedidoFinal = {
                id: uuid.v4(),
                userId: userId,
                createdAt: new Date().getTime(),
                payment: payment,
                price: price,
                pedidos: userCart,
            }
            pedidosArray.push(pedidoFinal);
		    await AsyncStorage.setItem("pedidos", JSON.stringify(pedidosArray));
            
            /* Removendo itens do carrinho do usuário */
		    const usersString = await AsyncStorage.getItem("users");
            const usersArray = usersString ? JSON.parse(usersString) : [];
            for(const user of usersArray) {
                if(user.id === userId) {
                    await removePedidosFromCart(user);
                    break;
                }
            };
            setUserCart([]);
            calculatePrice(userCart);
            navigation.navigate("Pedidos");
        } catch(e) {
            console.error(e);
        }
    }

    return (
        <>
            <ScrollView>
                <View style={carrinhoStyle.container}>
                    <View style={carrinhoStyle.pedidoView}>
                        {userCart.length !== 0 ? (
                            <>
                                <Text style={carrinhoStyle.title}>Itens adicionados</Text>
                                {userCart.map((produto) => (
                                    <View style={carrinhoStyle.produtoView} key={produto.id}>
                                        <View style={carrinhoStyle.produtoHeader}>
                                            <View style={carrinhoStyle.produtoIconView}>
                                                <Image source={produto.type === 0 ? require(`../../../assets/images/acai_cart.png`) : require(`../../../assets/images/icecream_cart.png`)} style={carrinhoStyle.produtoIcon}></Image>
                                            </View>
                                            <View style={carrinhoStyle.produtoTitleView}>
                                                <View style={carrinhoStyle.produtoPriceView}>
                                                    <Text style={carrinhoStyle.produtoName}>{getType(produto.type)}</Text>
                                                    <Text style={carrinhoStyle.produtoPrice}>{produto.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Text>
                                                </View>
                                                <View style={carrinhoStyle.produtoButtonView}>
                                                    <View style={carrinhoStyle.produtoButtonBox}>
                                                        {produto.count === 1 ?
                                                            (<TouchableOpacity onPress={() => {removePedidoFromCart(produto.id)}} style={[carrinhoStyle.produtoButtonOptions]}>
                                                                <Image style={[carrinhoStyle.produtoButtonOptionsIcons]} source={require(`../../../assets/svgs/red_trash.svg`)}></Image>
                                                            </TouchableOpacity>) : 
                                                            (<TouchableOpacity onPress={() => {removeCount(produto.id)}} style={[carrinhoStyle.produtoButtonOptions]}>
                                                                <Image style={[carrinhoStyle.produtoButtonOptionsIcons]} source={require(`../../../assets/svgs/red_minus.svg`)}></Image>
                                                            </TouchableOpacity>)
                                                        }
                                                        <Text style={carrinhoStyle.produtoButtonCounter}>{produto.count}</Text>
                                                        <TouchableOpacity onPress={() => {addCount(produto.id)}} style={[carrinhoStyle.produtoButtonOptions]}>
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
                                                            <Text style = {carrinhoStyle.produtoTextTitle}>Tamanho:</Text>
                                                            <Text style={carrinhoStyle.produtoText}>{produto.tamanho}ml</Text>
                                                        </View>
                                                    </View>
                                                    <View style={carrinhoStyle.produtoInfos}>
                                                        <View style={carrinhoStyle.produtoCounterCircle}>
                                                            <Image source={require(`../../../assets/svgs/cart/syrup.svg`)} style={carrinhoStyle.produtoCounterIcon}/>
                                                        </View>
                                                        <View style={carrinhoStyle.produtoTextView}>
                                                            <Text style = {carrinhoStyle.produtoTextTitle}>Calda:</Text>
                                                            <Text style={carrinhoStyle.produtoText}>{produto.calda || "Sem calda"}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={carrinhoStyle.produtoInfos}>
                                                        <View style={carrinhoStyle.produtoCounterCircle}>
                                                            <Image source={require(`../../../assets/svgs/cart/flavor.svg`)} style={carrinhoStyle.produtoCounterIcon}/>
                                                        </View>
                                                        <View style={carrinhoStyle.produtoTextView}>
                                                            <Text style = {carrinhoStyle.produtoTextTitle}>Sabores:</Text>
                                                            <Text style={carrinhoStyle.produtoText}>{produto.sabores.join("\n")}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={carrinhoStyle.produtoInfos}>
                                                        <View style={carrinhoStyle.produtoCounterCircle}>
                                                            <Image source={require(`../../../assets/svgs/cart/condimento.svg`)} style={carrinhoStyle.produtoCounterIcon}/>
                                                        </View>
                                                        <View style={carrinhoStyle.produtoTextView}>
                                                            <Text style = {carrinhoStyle.produtoTextTitle}>Condimentos:</Text>
                                                            <Text style={carrinhoStyle.produtoText}>{produto.condimentos.join("\n") || "Sem condimentos"}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={carrinhoStyle.produtoInfos}>
                                                        <View style={carrinhoStyle.produtoCounterCircle}>
                                                            <Image source={require(`../../../assets/svgs/cart/extra.svg`)} style={carrinhoStyle.produtoCounterIcon}/>
                                                        </View>
                                                        <View style={carrinhoStyle.produtoTextView}>
                                                            <Text style = {carrinhoStyle.produtoTextTitle}>Adicionais:</Text>
                                                            <Text style={carrinhoStyle.produtoText}>{produto.adicionais.join("\n") || "Sem adicionais"}</Text>
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
                                <View style = {carrinhoStyle.settings}>
                                    <View style = {carrinhoStyle.settingsFlex}>
                                        <View style = {carrinhoStyle.settingsLeft}>
                                            <Text style = {carrinhoStyle.settingsTitle}>Forma de pagamento</Text>
                                            <Text style = {carrinhoStyle.settingsContent}>{!payment ? "Não informado" : getPaymentMethodLabel(payment)}</Text>
                                        </View>
                                        <View style = {carrinhoStyle.settingsRight}>
                                            <TouchableOpacity style = {carrinhoStyle.settingsEditButton}>
                                                <Text onPress={() => {paymentModalToggle()}} style = {carrinhoStyle.settingsEditText}>Editar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </>
                        ) : (
                            <View style = {carrinhoStyle.noProductsView}>
                                <View style = {carrinhoStyle.noProductsIconView}>
                                    <Image source={require("../../svgs/cart/carrinho.svg")} style = {carrinhoStyle.noProductsIcon}></Image>
                                </View>
                                <Text style = {carrinhoStyle.noProductsTitle}>Vazio</Text>
                                <Text style = {carrinhoStyle.noProductsText}>Faça um pedido para encher o carrinho</Text>
                                <View style = {carrinhoStyle.noProductsFlexButtons}>
                                    <TouchableOpacity onPress={() => {navigation.navigate("Açaí")}} style = {carrinhoStyle.noProductsButton}>
                                        <Image source={require("../../svgs/cart/acai.svg")} style = {carrinhoStyle.noProductsButtonIcon}></Image>
                                        <Text style = {carrinhoStyle.noProductsButtonText}>Açaí</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => {navigation.navigate("Sorvete")}} style = {carrinhoStyle.noProductsButton}>
                                        <Image source={require("../../svgs/cart/icecream.svg")} style = {carrinhoStyle.noProductsButtonIcon}></Image>
                                        <Text style = {carrinhoStyle.noProductsButtonText}>Sorvete</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                        }
                    </View>
                </View>
            </ScrollView>
            <View style = {carrinhoStyle.footer}>
                <View style = {carrinhoStyle.footerMainView}>
                    <View style = {carrinhoStyle.footerMainDetailsView}>
                        <Text style = {carrinhoStyle.footerText1}>Total</Text>
                        <Text style = {carrinhoStyle.footerConfirmButtonPrice}>{price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} <Text style = {carrinhoStyle.footerText1}>/ {itemCount} {itemCount === 1 ? "item" : "itens"}</Text></Text>
                    </View>
                    {userCart.length !== 0 ? (
                        <View style = {carrinhoStyle.footerMainButtonView}>
                            {!payment ? (
                                <TouchableOpacity onPress={() => {paymentModalToggle()}} style = {carrinhoStyle.footerConfirmButton}>
                                    <Text style = {carrinhoStyle.footerConfirmButtonText}>Forma de pagamento</Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity onPress={() => {confirmRequest()}} style = {carrinhoStyle.footerConfirmButton}>
                                    <Text style = {carrinhoStyle.footerConfirmButtonText}>Finalizar pedido</Text>
                                </TouchableOpacity>
                            )}
                        </View>
                        ) : (
                            <></>
                        )
                    }
                </View>
            </View>
            <View style = {carrinhoStyle.modalMain}>
                <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {setModalVisible(!modalVisible)}} style = {carrinhoStyle.modals}>
                    <View style = {carrinhoStyle.modalView}>
                        <View style = {carrinhoStyle.modalHeader}>
                            <Text style = {carrinhoStyle.modalTitle}>Pague na entrega</Text>
                        </View>
                        <View style = {carrinhoStyle.modalMenu}>
                            {paymentMethods.map((paymentMethod) => (
                                <TouchableOpacity onPress = {() => {paymentMethodSelect(paymentMethod.value)}} style = {carrinhoStyle.modalMenuOption}>
                                    <View style = {carrinhoStyle.modalMenuOptionLeft}>
                                        <Image source={paymentMethod.icon} style = {carrinhoStyle.modalMenuOptionIcon}></Image>
                                        <Text style = {carrinhoStyle.modalMenuOptionLabel}>{paymentMethod.label}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </Modal>
            </View>
        </>
    );
}