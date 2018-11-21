import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.notes}>
        
        <Text style={styles.notitaText}>{this.props.val.fecha}</Text>
        <Text style={styles.notitaText}>{this.props.val.notita}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  notita: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  },
  notitaText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#774c2b'
  },
});