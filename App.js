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
  SectionList,
} from 'react-native';
import Board from './Board.js';
import { List, ListItem } from 'react-native-elements'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber +1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,    
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    
    const moves = history.map((step, move) => {
      const desc = move ? 
      'Ir al movimiento #' + move :
      'Comenzar a jugar';
      return (
          <TouchableOpacity 
          key={move}
          onPress={() => this.jumpTo(move)}>
            <Text>{desc}</Text>
          </TouchableOpacity>
      )
    });
    
    let status;
    if (winner) {
      status = 'El ganador es: ' + winner;
    } else {
      status = 'Siguiente jugador: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    
    return (
      <View style={styles.sectionContainer}>
        <View>
          <Board 
          squares={current.squares}
          onPress={(i) => this.handleClick(i)}/>
        </View>
        <View style={{ flex: 0.5}}>
          <Text style={styles.status}>{status}</Text>
          <View>{moves}</View>
        </View>
      </View>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b , c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cross: {
    flex: 0.5,
    color: 'red',
    fontSize: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    flex: 0.5, 
    textAlign: 'center',
    marginTop: 20,
    fontSize: 25,
  }
});