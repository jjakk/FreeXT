import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
import createDataContext from './createNotesContext';
import { navigate } from '../navigationRef';

const notesReducer = (state, action) => {
    switch(action.type){
        case 'get_notes':
            return action.payload;
        case 'update_note':
            return state;
        default:
            return state;
    }
};

const getNotes = (dispatch) => async () => {
    // Filter out empty notes
    let keys = await AsyncStorage.getAllKeys();
    for(const key of keys){
        let note = await AsyncStorage.getItem(key);
        note = JSON.parse(note);
        if(!note.title && !note.content){
            await AsyncStorage.removeItem(note.id);
        }
    }
    // Get all remaining notes
    keys = await AsyncStorage.getAllKeys();
    notes = [];
    for(const key of keys){
        let note = await AsyncStorage.getItem(key);
        note = JSON.parse(note);
        notes.push(note);
    }
    dispatch({ type: 'get_notes', payload: notes });
};

const createNote = (dispatch) => async ({ title, content }, callback) => {
    try{
        let id = uuid.v4();
        await AsyncStorage.setItem(id, JSON.stringify({title, content, id}));
        callback(id);
    }
    catch(err){
        console.log(`Error: ${err}`);
    }
};

const updateNote = (dispatch) => async ({ id, title, content }) => {
    try{
        await AsyncStorage.setItem(id, JSON.stringify({ title, content, id }));
        dispatch({ type: 'update_note', payload: id });
    }
    catch(err){
        console.log(`Error: ${err}`);
    }
};

const deleteNote = (dispatch) => async ({ id }, callback) => {
    try{
        await AsyncStorage.removeItem(id);
        callback();
    }
    catch(err){
        console.log(`Error: ${err}`);
    }
};

export const { Provider, Context } = createDataContext(
    notesReducer,
    { getNotes, createNote, updateNote, deleteNote },
    { errorMessage: '' }
);

