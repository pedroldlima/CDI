import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    Button,
    TouchableOpacity,
    Platform
} from "react-native";
import RNPickerSelect from 'react-native-picker-select'
import Icon from 'react-native-vector-icons/MaterialIcons'
import DateTimePicker from '@react-native-community/datetimepicker'


export default function CadastrarExtintor() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false)

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    };

    return (
        <ScrollView>
            <View style={styles.padd}>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: 'Flamboyant', value: 'football' },
                        { label: 'Cerrado', value: 'baseball' },
                        { label: 'Costa Atacadao', value: 'hockey' },
                    ]}
                    placeholder={{
                        label: 'Local',
                        value: null,
                    }}
                    style={{
                        inputIOS: {
                            padding: 10,
                            fontSize: 16,
                            borderWidth: 1,
                            borderColor: 'gray',
                            color: 'black',
                            height: 40,
                            width: 325,
                            margin: 5,

                        },
                        inputAndroid: {
                            fontSize: 16,
                            borderWidth: 0.5,
                            borderColor: 'purple',
                            borderRadius: 8,
                            color: 'black',
                        },
                        iconContainer: {
                            top: 5,
                            right: 15,
                        },
                    }}
                    useNativeAndroidPickerStyle={false}
                    Icon={() => {
                        return <Icon name="arrow-drop-down" size={24} color="gray" />
                    }}
                />

                {/* inputs Row */}
                <View style={styles.row}>
                    <TextInput
                        style={styles.num}
                        placeholder="Numero Extintor"
                        keyboardType='numeric'
                    />

                    <RNPickerSelect
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'ABC', value: 'ABC' },
                            { label: 'BC', value: 'BC' },
                            { label: 'AB', value: 'AB' },
                        ]}
                        placeholder={{
                            label: 'Tipo',
                            value: null,
                        }}
                        style={{
                            inputIOS: {
                                fontSize: 16,
                                paddingVertical: 12,
                                paddingHorizontal: 10,
                                borderWidth: 1,
                                borderColor: 'gray',
                                color: 'black',
                                height: 40,
                                width: 125,

                            },
                            inputAndroid: {
                                fontSize: 16,
                                paddingHorizontal: 10,
                                paddingVertical: 8,
                                borderWidth: 0.5,
                                borderColor: 'purple',
                                borderRadius: 8,
                                color: 'black',
                            },
                            iconContainer: {
                                top: 5,
                                right: 15,
                            },
                        }}
                        useNativeAndroidPickerStyle={false}
                        Icon={() => {
                            return <Icon name="arrow-drop-down" size={24} color="gray" />
                        }}
                    />
                </View>


                <View style={styles.row}>
                    <TextInput
                        style={styles.num}
                        placeholder="NF"
                        type='number'
                    />
                    <TextInput
                        style={styles.type}
                        placeholder="Peso"
                    />
                </View>

                {/* fim inputs row */}
                <TextInput
                    style={styles.input}
                    placeholder="Codigo selo inmetro"
                    keyboardType='numeric'
                />
                <TextInput
                    style={styles.input}
                    placeholder="CNPJ FORNECEDORA"
                />

                <View style={styles.row}>
                    <TextInput
                        style={styles.lacre}
                        placeholder="Lacre"
                        type='number'
                    />
                    <TextInput
                        style={styles.classe}
                        placeholder="Classe"
                    />
                </View>

                <View style={styles.row}>
                    <TextInput
                        style={styles.lacre}
                        placeholder="Teste Hidrostatico"
                        type='number'
                    />

                    <DateTimePicker
                        style={styles.date}
                        testID="dateTimePicker"
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        maximumDate={new Date(2300, 10, 20)}
                        minimumDate={new Date(1950, 0, 1)}
                    />

                </View>

                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Digite seu texto aqui..."
                    placeholderTextColor="grey"
                    multiline={true}
                />


                <TouchableOpacity style={styles.button}>
                    <View style={styles.cadastrar}>

                        <Text style={styles.textCadast}>
                            Cadastrar Extintor
                        </Text>

                    </View>
                </TouchableOpacity>
            </View>



        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        height: 40,
        padding: 10,
        margin: 5,
    },
    padd: {
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        margin: 5,
    },
    num: {
        width: 200,
        borderWidth: 1,
        height: 40,
        padding: 10,
    },
    type: {
        borderWidth: 1,
        height: 40,
        width: 125,
        padding: 10,
    },
    lacre: {
        width: 170,
        borderWidth: 1,
        height: 40,
        padding: 10,
    },
    classe: {
        width: 155,
        borderWidth: 1,
        height: 40,
        padding: 10,
    },
    textArea: {
        borderWidth: 1,
        height: 150,
        padding: 10,
        margin: 5,
    },
    date: {
        borderWidth: 1,
        width: 155,
        height: 40,
    },
    button: {
        display: 'flex',
        justifyContent: 'end',
        alignItems: 'end',
        margin: 5,
    },
    cadastrar: {
        backgroundColor: '#36C07E',
        width: '100%',
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})