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
        
        <Text style={styles.notitaText}>{this.props.val.date}</Text>
        <Text style={styles.notitaText}>{this.props.val.notita}</Text>

        <TouchableOpacity
          style={styles.deleteNotita}
          onPress={this.props.eventDeleteNotita}>
          <Text style={styles.deleteNotitaText}>-</Text>
        </TouchableOpacity>

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
  deleteNotita: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10
  },
  deleteNotitaText: {
    color: 'white',
    fontSize: 26,
  }
});