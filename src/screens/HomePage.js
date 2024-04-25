import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CardsCadastro from "../components/CardsCadastro";


export default function HomePage({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>Ola</Text>
            </View>
            <CardsCadastro navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dfcccc',
    },
    header: {
        width: '100%',
        height: '30%',
        borderWidth: 1,
        backgroundColor: 'purple',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})