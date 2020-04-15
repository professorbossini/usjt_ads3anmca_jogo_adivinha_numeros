import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import cores from '../cores/cores';


const NumeroEscolhido = (props) => {
  return (
    <View style={estilos.caixaNumeroEscolhido}>
        <Text style={estilos.numeroEscolhido}>{props.children}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
    caixaNumeroEscolhido: {
        borderBottomColor: cores.accent,
        borderBottomWidth: 2,
        marginVertical: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numeroEscolhido: {
        fontSize: 22
    }
});

export default NumeroEscolhido;