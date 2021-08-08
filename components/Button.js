/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, TouchableOpacity } from 'react-native';
import {
    StyleSheet,
  } from 'react-native';
const Button = ({onPress}) => {
    const [pos, setPos] = useState({
        position: 'absolute',
        width: 160,
        height: 52,
        justifyContent: 'center',
        backgroundColor: '#0046A4',
        top: 100,
        left: 120,
        borderRadius: 15,
        alignItems: 'center',
    });
    const onPressBtn = () => {
        setPos( (prev) => {
            return {
                ...pos, ...{top: Math.floor(Math.random() * 10) * 55 + 50 ,
                left: Math.floor(Math.random() * 10) * 22 + 30 ,
                }
            };
        });
        onPress();
    };
    return (
        <TouchableOpacity
            style={pos}
            onPress={onPressBtn}>
            <Text style={styles.text}>Click me!</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({

    text: {
        fontSize: 20,
        fontWeight: '500',
        color: 'white',
    },
});
export default Button;

