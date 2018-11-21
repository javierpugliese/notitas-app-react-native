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
      <View key={this.props.keyval} style={styles.notita}>
        
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
    borderLeftWidth: 4,
    borderLeftColor: '#ededed',
    borderRightWidth: 4,
    borderRightColor: '#ededed',
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
    backgroundColor: '#ed5050',
    padding: 10,
    top: 20,
    bottom: 20,
    right: 10
  },
  deleteNotitaText: {
    color: 'white',
    fontSize: 32,
  }
});