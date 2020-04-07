import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import TelaComecoDoJogo from './telas/TelaComecoDoJogo';

export default function App() {
  return (
    <View style={estilos.tela}>
      <Cabecalho titulo={"Adivinhe o número"}/>
      <TelaComecoDoJogo />
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }  
});
