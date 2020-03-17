import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Square from './Square.js';

export default class Board extends Component {
    renderSquare(i) {
      return (
      <Square
          value={this.props.squares[i]}
          onPress={() => this.props.onPress(i)}/>
        );
    }

    render() {
      return (
      <View>
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

const styles = StyleSheet.create({
    squaresContainer: {
      flexDirection: 'row',
    }
});