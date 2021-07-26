import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Context } from '../context/NotesContext';
import NotePreview from '../components/NotePreview';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';

const HomeScreen = ({ navigation }) => {
    const { state, createNote, getNotes } = useContext(Context);

    useEffect(() => {
        getNotes();

        const listener = navigation.addListener('didFocus', () => {
            getNotes();
        });

        return () => {
            listener.remove();
        };
    }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <Spacer>
                <View style={styles.header}>
                    <Text style={styles.headerText}>FreeXT</Text>
                    <TouchableOpacity
                        style={styles.add}
                        onPress={() => {
                            navigation.navigate('Note')
                        }}
                    >
                        <Feather name="plus" size={42} />
                    </TouchableOpacity>
                </View>
            </Spacer>
            <FlatList
                data={state}
                renderItem={({ item }) => (
                        <NotePreview
                            title={item.title}
                            content={item.content}
                            id={item.id}
                            onClick={() => {
                                navigation.navigate('Note', { title: item.title, content: item.content, id: item.id });
                            }}
                        />
                    )
                }
                keyExtractor={(item) => item.id}
            />
            {
            state.length === 0
                ? (
                    <View style={styles.emptyContainer}>
                        <Image
                            source={require('../../assets/adaptive-icon.png')}
                            style={styles.empty}
                        />
                    </View>
                )
                : null
            }
        </SafeAreaView>
    );
};


HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerShown: false
        // headerRight: () => (
        //     <TouchableOpacity
        //         onPress={() => {
        //             navigation.navigate('Note')
        //         }}
        //     >
        //         <Feather name="plus" size={30} style={{marginRight: 15}} />
        //     </TouchableOpacity>
        // ),
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    emptyContainer: {
        flex: 2
    },
    empty: {
        height: 150,
        width: 150,
        opacity: 0.5,
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: '#cccccc',
        borderRadius: 9999
    },
    header: {
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderColor: '#D7D7D7'
    },
    headerText: {
        fontSize: 42,
        position: 'absolute'
    },
    add: {
        alignSelf: 'flex-end',
        margin: 10
    }
});

export default HomeScreen;