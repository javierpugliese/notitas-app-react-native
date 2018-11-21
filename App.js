import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={estilos.contenedor}>

        <View style={estilos.encabezado}>
          <Text style={estilos.textoEncabezado}>- NOTITAS -</Text>
        </View>

      </View>
    );
  }
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
  },
  encabezado: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  textoEncabezado: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },
});
