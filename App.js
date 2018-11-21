import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Notita from './componentes/Notita';

import firebase from 'firebase';

export default class App extends React.Component {

  componentWillMount() {
    /*
    Conectar con Firebase.
    Se utiliza para poder traer y mandar
    datos a la base de datos.    
    */
    var config = {
      apiKey: "AIzaSyC8L7gGSj7l76LPJCaFjF6RNAhHAqI0W80",
      authDomain: "notitas-app-react-native.firebaseapp.com",
      databaseURL: "https://notitas-app-react-native.firebaseio.com",
      projectId: "notitas-app-react-native",
      storageBucket: "notitas-app-react-native.appspot.com",
      messagingSenderId: "485786666385"
    };
    firebase.initializeApp(config);
    
    firebase.database().ref('notitas/001').set(
      {
        name: 'Lorem Ipsum',
        age: 21,
      }
    ).then(() => {
        console.log('INSERTADO');
      }).catch((error) => {
        console.log(error);
      });
  }
  // Estado de la App
  state = {
    all_notitas: [],
    notita_text: ''
  }

  render() {

    // Recorro el array de notitas y retorno una Notita
    let show_notitas = this.state.all_notitas.map((val, key) => {
      return (
        <Notita
          key={key}
          keyval={key}
          val={val}
          eventDeleteNotita={()=>this.deleteNotita(key)}>
        </Notita>
      );
    });

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>NOTITAS</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {show_notitas}
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={this.addNotita.bind(this)}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            placeholder='>>> Escribir notita'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
            onChangeText={(notita_text) => (this.setState({notita_text}))}
            value={this.state.notita_text}>

          </TextInput>
        </View>

      </View>
    );
  }

  addNotita() {
    /*
    Agregar una notita.
    Se hizo esta función para pasarle
    datos al estado y luego renderizar notitas.
    */
    if (this.state.notita_text) {
      var d = new Date();
      this.state.all_notitas.push(
        {
          'notita': this.state.notita_text,
          'date': d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear(),
        }
      ); // Agrego datos al array de notitas
      
      // Agrego notitas al estado que las contiene
      this.setState(
        {
          all_notitas: this.state.all_notitas,
          notita_text: '',  // Limpiar input
        }
      )
    }
  }  // addNotita

  deleteNotita(key) {
    /*
    Borrar una notita. Requiere key/id de la notita.
    Se hizo esta función para borrar
    una notita del array de notitas en el estado.
    Se le pasa una key o id y la cantidad de elementos,
    en este caso, uno. Luego se refresca el estado.
    */
    this.state.all_notitas.splice(key, 1)
    this.setState({all_notitas: this.state.all_notitas})  // Refrescar estado
  } // deleteNotita

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#774c2b',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },
  headerText: {
    color: 'white',
    fontSize: 26,
    padding: 26,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0.
  },
  addButton: {
    backgroundColor: '#774c2b',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  textInput: {
    fontSize: 14,
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#ff9035',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  }
});