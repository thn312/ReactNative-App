/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Counter = ({count}) => {
    return (
        <View style={styles.count}>
            <Text style={styles.text}>{count}</Text>
        </View>
    );
};
const styles = StyleSheet.create({

    count: {
        marginTop: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 15,
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: '500',
        color: 'black',
    },
});

export default Counter;
