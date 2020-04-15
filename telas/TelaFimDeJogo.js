import React from 'react';
import { View, Text, StyleSheet} from 'react-native';


TelaFimDeJogo = () => {
  return (
    <View style={estilos.tela}>
        <Text>O jogo acabou</Text>
    </View>
        
  );
}

const estilos = StyleSheet.create({
    tela: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TelaFimDeJogo;
