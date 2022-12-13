import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Products({ data, addToCart }) {
    return (
        <View style={styles.container}>
            <View>
                <Text>{data.name}</Text>
                <Text>R$ {data.price}</Text>
            </View>
            <TouchableOpacity
                onPress={addToCart}
                style={styles.buttonAdd}
            >
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    buttonAdd: {
        backgroundColor: 'blue',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20
    }
})