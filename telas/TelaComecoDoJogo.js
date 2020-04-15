import React, {useState} from 'react';
import { Text, View, StyleSheet, 
        TextInput, Button, TouchableWithoutFeedback, 
                            Keyboard, 
                            Alert} from 'react-native';

import Cartao from '../components/Cartao';

import Cores from '../cores/cores'

import Entrada from '../components/Entrada';
import NumeroEscolhido from '../components/NumeroEscolhido';

const TelaComecoDoJogo = (props) => {
    const [texto, setTexto] = useState('');

    const capturaTexto = (textoDigitado) =>{
        textoDigitado = textoDigitado.replace (/[^0-9]/g, '');
        setTexto(textoDigitado);
    }

    const [usuarioConfirmou, setUsuarioConfirmou] = useState (false);

    const [numeroDigitado, setNumeroDigitado] = useState();

    const reiniciaTexto = () => {
        setTexto('');
        setUsuarioConfirmou(false);
    };

    const confirmaJogada = () => {
        const n = parseInt(texto);
        if (isNaN(n) || n <= 0){
            Alert.alert(
                'Número inválido',
                'Digite um número entre 1 e 99',
                [
                    {
                        text: 'OK',
                        style: 'default',
                        onPress: reiniciaTexto
                    }
                ]
            );
            return;
        }
        setUsuarioConfirmou(true);
        setNumeroDigitado(parseInt(texto));
        setTexto('');
        Keyboard.dismiss();
    }

    let numeroEscolhidoText;

    if (usuarioConfirmou){
        numeroEscolhidoText = 
        <Cartao estilos={estilos.numeroSelecionadoCartao}>
            <Text>Número digitado:</Text>
            <NumeroEscolhido>
                {numeroDigitado}
            </NumeroEscolhido>
            <Button
                title="Começar"
                onPress={() => props.onJogoComecou(numeroDigitado)}
            />
        </Cartao>
        
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
            <View style={estilos.tela}>
                <Text style={estilos.titulo}>Comece um jogo</Text>
                <Cartao estilos={estilos.entradaView}>
                    <Text>Digite um número</Text>
                    <Entrada 
                        estilos={estilos.entrada}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={capturaTexto}
                        value={texto}
                    />
                    <View style={estilos.buttonsView}>
                        <View style={estilos.botao}>
                            <Button 
                                title="Reiniciar"
                                color={Cores.accent}
                                onPress={reiniciaTexto}
                            />
                        </View>
                        <View style={estilos.botao}>
                            <Button
                                title="Confirmar"
                                color={Cores.accent}
                                onPress={confirmaJogada}
                            />
                        </View>
                    </View>
                </Cartao>
                {numeroEscolhidoText}
            </View>
        </TouchableWithoutFeedback>
    );
}

const estilos = StyleSheet.create({
    numeroSelecionadoCartao: {
        marginTop: 20
    },
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