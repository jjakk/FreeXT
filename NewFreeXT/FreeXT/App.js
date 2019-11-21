import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
import { FloatingAction } from "react-native-floating-action";

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


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>FreeXT</Text>
      <FloatingAction actions={actions}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    marginTop: Constants.statusBarHeight,
  },
  mainHeader: {
    marginTop: 15,
    fontSize: 30,
  }
});
