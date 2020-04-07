import React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

import Cartao from '../components/Cartao';

import Cores from '../cores/cores'

import Entrada from '../components/Entrada';

const TelaComecoDoJogo = (props) => {
    return (
        <View style={estilos.tela}>
            <Text style={estilos.titulo}>Comece um jogo</Text>
            <Cartao estilos={estilos.entradaView}>
                <Text>Digite um número</Text>
                <Entrada 
                    estilos={estilos.entrada}
                    keyboardType='number-pad'
                    maxLength={2}
                />
                <View style={estilos.buttonsView}>
                    <View style={estilos.botao}>
                        <Button 
                            title="Reiniciar"
                            color={Cores.accent}
                        />
                    </View>
                    <View style={estilos.botao}>
                        <Button
                            title="Confirmar"
                            color={Cores.accent}
                        />
                    </View>
                </View>
            </Cartao>
        </View>
    );
}

const estilos = StyleSheet.create({
    entrada: {
        width: 50,
        textAlign: 'center'
    },
    botao: {
        width: 100
    },
    buttonsView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15

    },

    entradaView: {
        width: 300,
        maxWidth: '80%'
    },  
    titulo: {
        fontSize: 20,
        marginVertical: 10
    },
    tela: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});

export default TelaComecoDoJogo;