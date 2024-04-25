import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { userStore } from '../store/userStore';
import { auth, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from '../core/config'; // Importando sendPasswordResetEmail
import { signInWithEmailAndPassword } from "firebase/auth";
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const updateUserToken = userStore((state) => state.updateUserToken);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { navigate } = useNavigation();

    function handleLogin() {
        if (!email || !password) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                updateUserToken(userCredential.user.accessToken);
            })
            .catch((error) => {
                Alert.alert('Erro', 'Usuário ou senha inválidos.');
            });
    }

    function handleGoogleLogin() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log("Login com o Google bem-sucedido:", result);
            })
            .catch((error) => {
                console.error("Erro ao fazer login com o Google:", error);
            });
    }

    function handleForgotPassword() {
        if (!email) {
            Alert.alert('Erro', 'Por favor, insira seu endereço de e-mail para redefinir sua senha.');
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                Alert.alert('E-mail enviado', 'Verifique seu e-mail para redefinir sua senha.');
            })
            .catch((error) => {
                Alert.alert('Erro', 'Ocorreu um erro ao enviar o e-mail de redefinição de senha.');
            });
    }

    function handleRegister() {
        navigate('Register');
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
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />

            <View style={styles.forgotPassword}>
                <TouchableOpacity onPress={handleForgotPassword}> 
                    <Text style={styles.passwordText}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.orContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>Ou</Text>
                <View style={styles.line} />
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
                    <Icon name="google" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.appleButton}>
                    <Icon name="apple" size={20} color="white" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.facebookButton}>
                    <Icon name="facebook" size={20} color="white" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={handleRegister}>
                <Text style={styles.passwordText}>Não possui conta? Registrar</Text>
            </TouchableOpacity>

            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#DE3333",
        paddingHorizontal: 20,
    },
    backgroundAnimation: {
        position: 'absolute',
        width: '100%',
        height: '50%',
        top: 320,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: -10,
    },
    passwordText: {
        textAlign: 'right',
        fontSize: 16,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'yellow',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
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
        borderRadius: 20,
        marginBottom: 10,
    },
    appleButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#000',
        marginBottom: 10,
    },
    facebookButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'blue',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
    forgotPassword: {
        width: '100%',
        marginBottom: 20,
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
});
