import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Products from "../../components/Products";

import { CartContext } from "../../contexts/CartContext";

export default function Home({ navigation }) {
    const { cart, addItemCart } = useContext(CartContext);

    const [produto, setProduto] = useState([
        { id: '1', name: 'Coca-Cola', price: '19.90' },
        { id: '2', name: 'Chocolate', price: '6.50' },
        { id: '3', name: 'Quejo 500g', price: '15' },
        { id: '4', name: 'Batata Frita', price: '23.90' },
        { id: '5', name: 'Guaraná Lata', price: '6.00' }
    ]);

    function handleAddCart(item) {
        addItemCart(item)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Lista de Produtos</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                    <Icon name="shopping-cart" size={25} color="#000" />
                    <View style={styles.count}>
                        <Text style={{ fontSize: 10, fontWeight: 'bold' }}>{cart?.length}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <FlatList
                keyExtractor={item => String(item.id)}
                data={produto}
                renderItem={({ item }) => <Products data={item} addToCart={() => handleAddCart(item)} />}
            />
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    headerText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    count: {
        zIndex: 2,
        position: 'absolute',
        backgroundColor: 'red',
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -8,
        marginLeft: 12

    }
})