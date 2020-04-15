import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import TelaComecoDoJogo from './telas/TelaComecoDoJogo';
import TelaJogo from './telas/TelaJogo';
import TelaFimDeJogo from './telas/TelaFimDeJogo';



export default function App() {
  const [numeroDigitado, setNumeroDigitado] = useState();
  const [rodadas, setRodadas] = useState(0);

  const jogoComecou = (numeroDigitado) => {
    setNumeroDigitado(numeroDigitado);
  }

  const atualizaRodadas = (numRodadas) => {
    setRodadas(numRodadas);
  }

  let conteudo = <TelaComecoDoJogo onJogoComecou={jogoComecou}/>

  if (numeroDigitado && rodadas <= 0){
    conteudo = <TelaJogo onJogoAcabou={atualizaRodadas} valorDigitado={numeroDigitado}/>
  }
  else if (rodadas > 0){
    conteudo = <TelaFimDeJogo />
  }

  return (
    <View style={estilos.tela}>
      <Cabecalho titulo={"Adivinhe o número"}/>
      {conteudo}
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }  
});
