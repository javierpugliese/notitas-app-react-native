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

export default class App extends React.Component {

  state = {
    all_notitas: [ {'date': 'Hoy', 'notita': 'testNotita1'} ],
    notita_text: 'notitaTextTest1'
  }

  render() {

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
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            placeholder='>>> Escribir notita'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'>

          </TextInput>
        </View>

      </View>
    );
  }
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