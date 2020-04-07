import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
const Entrada = (props) => {
    return (
        <TextInput
            {...props}
            style={{...estilos.entrada, ...props.estilos}}
        />
    );
}

const estilos = StyleSheet.create ({
    entrada: {
        height:  40,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
        paddingVertical: 1,
        paddingHorizontal: 6
        
    }
});

export default Entrada;

