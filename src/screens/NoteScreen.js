import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/NotesContext';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';

const NoteScreen = ({ navigation }) => {
    const { state, createNote, deleteNote, updateNote } = useContext(Context);
    const [title, setTitle] = useState(navigation.getParam('title'));
    const [content, setContent] = useState(navigation.getParam('content'));
    const [noteId, setNoteId] = useState(navigation.getParam('id'));

    if(!noteId){
        createNote({ title, content }, (id) => {
            setNoteId(id);
        });
    }
    else{
        updateNote({id: noteId, title, content});
    }

    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home')
                    }}
                >
                    <Ionicons name="arrow-back" style={styles.back} />
                </TouchableOpacity>
                <TextInput
                    style={styles.title}
                    value={title}
                    placeholder='Title'
                    onChangeText={setTitle}
                />
                <TouchableOpacity
                    onPress={() => {
                        deleteNote({ id: noteId }, () => {
                            navigation.navigate('Home');
                        });
                    }}
                >
                    <MaterialIcons name="delete-outline" size={30} style={styles.trash} />
                </TouchableOpacity>
            </View>
            <TextInput
                multiline
                style={styles.content}
                value={content}
                placeholder='Content'
                onChangeText={setContent}
            />
        </SafeAreaView>
    );
};

NoteScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 25
    },
    title: {
        padding: 15,
        fontSize: 26,
        flex: 1,
        borderWidth: 2,
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderRadius: 10
    },
    back: {
        fontSize: 36,
        margin: 10
    },
    trash: {
        fontSize: 36,
        margin: 10
    },
    content: {
        fontSize: 18,
        margin: 15,
        textAlignVertical: 'top',
        lineHeight: 25,
        flex: 1,
        padding: 15,
        borderWidth: 2,
        backgroundColor: 'white',
        borderColor: '#e8e8e8',
        borderRadius: 10
    }
});

export default NoteScreen;