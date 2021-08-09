/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {Image, Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import drawables from '../../variants/drawables';
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onPress = () => {
        props.navigation.navigate('home');
    }
    return (
        <View>
            <Text style={styles.header}>Welcome back to</Text>
            <Image source={{uri: drawables.doge}} style={styles.image} />
            <Text style={styles.txt}>Please enter your account infomation.</Text>
            <TextInput style={styles.textInput}
                label="Email"
                placeholder="Email"
                value=""
                onChangeText={(email) => setEmail(email)}
                value={email}
            />
            <TextInput style={styles.textInput}
                label="Password"
                placeholder="Password"
                onChangeText={(psw) => setPassword(psw)}
                value={password}
                secureTextEntry={true}
            />
            <View style={styles.containerButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onPress()}
                >
                <Text style={styles.textButton}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
}

export default Login;
