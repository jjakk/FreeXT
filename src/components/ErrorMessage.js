import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ErrorMessage = ({ message }) => {

    return (
        <View style={styles.error}>
            <Text style={styles.errorMessage}>
                {message}
            <TouchableOpacity>
                <AntDesign name="closecircle" style={styles.close} />
            </TouchableOpacity>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        backgroundColor: 'white',
        padding: 10,
        alignSelf: 'center',
        bottom: 25,
        borderColor: '#cf5555',
        borderWidth: 2,
        borderRadius: 15,
        position: 'absolute'
    },
    errorMessage: {
        color: '#cf5555',
        fontSize: 24,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    close: {
        color: '#cf5555',
        fontSize: 28,
        marginLeft: 15
    }
});

export default ErrorMessage;