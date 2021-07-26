import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';

const NotePreview = ({ title, content, onClick, id }) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <Spacer>
                <View style={styles.container}>
                    <Text style={styles.title} numberOfLines={1}>{title || content}</Text>
                    <Text style={styles.subtitle} numberOfLines={1}>{content}</Text>
                </View>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderColor: '#D7D7D7',
        paddingBottom: 10
    },
    title: {
        fontSize: 26
    },
    subtitle: {
        fontSize: 16,
        color: 'grey'
    }
});

export default NotePreview;