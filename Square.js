import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

export default function Square(props) {
    return(
        <TouchableOpacity
        style={styles.square}
        onPress={props.onPress}>
            <Text style={styles.textSquare}>
                {props.value}
            </Text>
        </TouchableOpacity>
    );
} 

const styles = StyleSheet.create({
    square: {
        borderWidth: 1,
        width: 100,
        height: 100,
      },
      textSquare: {
          fontSize: 50,
          textAlign: 'center',
      }
});