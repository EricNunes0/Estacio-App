import { useCallback, useEffect, useState } from "react";
import { Button, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { carrinhoStyle } from "../../styles/carrinho";
import { removePedidosFromCart } from "../../../functions/removePedidosFromCart";
import uuid from "react-native-uuid";

export default function Carrinho() {
    const navigation = useNavigation();
    const [userId, setUserId] = useState('');
    const [userCart, setUserCart] = useState([]);
    const [price, setPrice] = useState(0);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        tokenGetUser();
    }, []);

    useFocusEffect(
        useCallback(() => {
            tokenGetUser();
            return () => {
                // Esta função será executada quando a tela perder o foco (opcional)
            };
        }, [])
      );
    
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
                console.log(usersArray[i].cart)
                setUserCart(usersArray[i].cart);
                calculatePrice(usersArray[i].cart);
            } else {
                alert(`Não existe um token: ${tokenJSON}`);
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

    /* Função para confirmar o pedido */
    const confirmarPedido = async () => {
        try {
		    const pedidosString = await AsyncStorage.getItem("pedidos");
            let pedidosArray = pedidosString ? JSON.parse(pedidosString) : [];
            let pedidoFinal = {
                id: uuid.v4(),
                userId: userId,
                createdAt: new Date().getTime(),
                price: price,
                pedidos: userCart
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
                    <Text style={carrinhoStyle.title}>Itens adicionados</Text>
                    <View style={carrinhoStyle.pedidoView}>
                        {userCart.length !== 0 ? (
                            <>
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
                            </>
                        ) : (
                            <View style = {carrinhoStyle.noProductsView}>
                                <View style = {carrinhoStyle.noProductsIconView}>
                                    <Image source={require("../../svgs/cart/carrinho.svg")} style = {carrinhoStyle.noProductsIcon}></Image>
                                </View>
                                <Text style = {carrinhoStyle.noProductsText}>Seu carrinho está vazio</Text>
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
                            <TouchableOpacity onPress={() => {confirmarPedido()}} style = {carrinhoStyle.footerConfirmButton}>
                                <Text style = {carrinhoStyle.footerConfirmButtonText}>Finalizar pedido</Text>
                            </TouchableOpacity>
                        </View>
                        ) : (
                            <></>
                        )
                    }
                </View>
            </View>
        </>
    );
}