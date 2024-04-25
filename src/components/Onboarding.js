import React, { useState, useRef } from "react";
import { View, StyleSheet, FlatList, Animated, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

import slides from "../../slides";
import OnboardingItem from "./OnboardingItem";

export default Onboarding = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <FlatList
                data={slides}
                renderItem={({ item }) => <OnboardingItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                })}
            />

            <TouchableOpacity
                style={styles.loginButton}
                onPress={() => navigation.navigate('Login')} // Navegar para a tela de login ao clicar no botão
            >
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginButton: {
        position: "absolute",
        bottom: 20,
        width: 300,
        alignSelf: "center",
        backgroundColor: "#007AFF",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    loginButtonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});