import React, {useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import NumeroEscolhido from '../components/NumeroEscolhido';
import Cartao from '../components/Cartao';

const geraValor = (min, max, excluir) =>{
    min = Math.ceil(min);
    max = Math.floor (max);
    const gerado = min + Math.floor(Math.random() * (max - min));

    if (gerado === excluir){
        return geraValor (min, max, excluir);
    }
    return gerado;
}


TelaJogo = (props)  => {
    const[tentativaAtual, setTentativaAtual] = useState(geraValor(1, 100, props.valorDigitado));
    const [rodadas, setRodadas] = useState (0);
    const minAtual = useRef(1);
    const maxAtual = useRef(100);

    useEffect(() => {
        if (tentativaAtual === props.valorDigitado)
            props.onJogoAcabou(rodadas);
    });

    const geraNovoPalpite = (dica) => {
        if (dica === 'menor' && tentativaAtual < props.valorDigitado
            || dica === 'maior' && tentativaAtual > props.valorDigitado){

                Alert.alert (
                    'Dica inválida',
                    'Dica errada...',
                    [
                        {
                            text: 'OK', style: 'cancel'
                        }
                    ]
                );
            return;
        }
        if (dica === 'menor'){
            maxAtual.current = tentativaAtual;
        }
        else{
            minAtual.current = tentativaAtual;
        }
        
        const n = geraValor (minAtual.current, maxAtual.current, tentativaAtual);
        setTentativaAtual(n);
        setRodadas (rodadas => rodadas + 1);

    }


  return (
    <View style={estilos.tela}>
        <Text>Palpite do computador</Text>
        <NumeroEscolhido>
            {tentativaAtual}
        </NumeroEscolhido>
        <Cartao estilos={estilos.botoes}>
            <Button
                title="É menor"
                onPress={geraNovoPalpite.bind(this, 'menor')}
            />
            <Button
                title="=É maior"
                onPress={geraNovoPalpite.bind(this, 'maior')}
            />
        </Cartao>
    </View>
  );
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    botoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});


export default TelaJogo;
