import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from "react-native";
import { auth } from "../core/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function RegisterPage() {
    const { navigate } = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    function handleRegister() {
        if (!email || !password || !confirmPassword) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                Alert.alert('Sucesso', 'Usuário registrado com sucesso!');
            })
            .catch((error) => {
                Alert.alert('Erro', 'Erro ao registrar usuário: ' + error.message);
            });
    }
    function handleLogin() {
        navigate('Login');
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Confirme a senha"
                    secureTextEntry={!showPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                    <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="#000" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
                <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>

            <View>
                <TouchableOpacity onPress={handleLogin}>
                    <Text>Ja possui conta?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>Ou</Text>
                <View style={styles.line} />
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.googleButton}>
                    <Icon name="google" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.appleButton}>
                    <Icon name="apple" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.facebookButton}>
                    <Icon name="facebook" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DE3333",
        paddingHorizontal: 20
    },
    color: {
        color: 'purple',
        fontWeight: 'bold',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    subtitulo: {
        fontSize: 20,
        marginBottom: 20,
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: 'yellow',
        color: '#000',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    registerButton: {
        width: "100%",
        height: 40,
        backgroundColor: "#4267B2",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginBottom: 10
    },
    buttonText: {
        color: "#fff",
        fontSize: 16
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: -10,
    },
    loginButton: {
        width: '100%',
        height: 40,
        backgroundColor: '#4267B2',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 150,
        alignItems: 'center',
    },
    googleButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: '#DB4437',
        borderRadius: '50%',
        marginBottom: 10,
    },
    Line: {
        marginTop: 10,
        marginBottom: 20,
    },
    appleButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: '#000',
        marginBottom: 10,
    },
    facebookButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: 'blue',
        marginBottom: 10,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#000',
    },
    orText: {
        marginHorizontal: 10,
        color: '#000',
    },
    passwordContainer: {
        position: 'relative',
        width: '100%',
    },
    eyeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});
