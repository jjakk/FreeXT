import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Touchable from 'react-native-platform-touchable';
import Constants from 'expo-constants';
import { FloatingAction } from "react-native-floating-action";
import { Header } from "react-native-elements";

//For add note button

const actions = [
  {
    text: "Regular Note",
    name: "bt_regularNote",
    icon: require("./assets/icons/newNote.png"),
    position: 1
  },
  {
    text: "List",
    name: "bt_list",
    icon: require("./assets/icons/list.png"),
    position: 2
  },
];

export default class HomeScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Header
        leftComponent={{ icon: 'menu', color: '#fff', underlayColor: 'rgba(52, 52, 52, 0)', size:30, onPress: ()=>{alert("This should open the drawer");} }}
        centerComponent={{ text: 'FreeXT', style: { color: '#fff', fontSize: 25 } }}
        />
        <NotePreview title="Groceries"/>
        <NotePreview title="Stuff"/>
        <NotePreview title="Other Stuff"/>
        <FloatingAction actions={actions}/>
      </View>
    );
  }
}

class NotePreview extends React.Component{
  render(){
    return(
      <Touchable style={styles.note} background={Touchable.Ripple('grey')}>
        <Text style={styles.noteTitle}>{this.props.title}</Text>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
  note: {
    backgroundColor: '#fdfdfd',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
    alignSelf: 'stretch',
  },
  noteTitle: {
    fontSize: 15,
  },
});
