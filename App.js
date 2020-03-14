/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class Square extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.square}></TouchableOpacity>
    );
  }
}

class Board extends Component {
  renderSquare(i) {
    return <Square />;
  }
  render() {

    const status = 'Siguiente jugador: X';

    return (
    <View>
      <Text className='status' style={styles.status}>{status}</Text>
  
      <View style={styles.squaresContainer}>
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </View>
      <View style={styles.squaresContainer}>
      {this.renderSquare(3)}
      {this.renderSquare(4)}
      {this.renderSquare(5)}
      </View>
      <View style={styles.squaresContainer}>
      {this.renderSquare(6)}
      {this.renderSquare(7)}
      {this.renderSquare(8)}
      </View>
  
    </View>
    );
  };
};

class App extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <View>
          <Board />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    borderWidth: 1,
    width: 100,
    height: 100,
  },
  squaresContainer: {
    flexDirection: 'row',
  },
  cross: {
    flex: 1,
    color: 'red',
    fontSize: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    textAlign: 'center',
    marginBottom: 30,
  }
});

export default App;
