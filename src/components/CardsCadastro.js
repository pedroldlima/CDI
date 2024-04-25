import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function CardsCadastro({navigation}) {
    return (
        <View style={styles.flex}>
            <TouchableOpacity onPress={() => navigation.navigate('CadastrarExtintor')}>
                <View style={styles.cadastror}>

                    <Text style={styles.textCadast}>
                        Cadastrar Extintor
                    </Text>

                </View>
            </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.arqv}>
                <Text>
                    Files
                </Text>
            </View>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    flex: {
        flexDirection: 'row',
    },
    cadastror: {
        backgroundColor: 'red',
        width: 200,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textCadast: {
        fontSize: 20,
        color: '#fff',
    },
    arqv: {
        backgroundColor: 'green',
        width: 200,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
