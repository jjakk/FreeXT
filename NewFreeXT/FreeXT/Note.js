import React from "react";
import { View, Text, Button, TextInput, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView } from "react-native";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from "react-navigation-stack";
import Constants from 'expo-constants';
import InputScrollView from 'react-native-input-scroll-view';

export default class NoteScreen extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
    };
  };
  state = {
    text: "",
  };
  render(){
    const { navigation } = this.props;
    const { text } = this.state;
    return(
      <KeyboardAvoidingView style={styles.container} behavior="height" keyboardVerticalOffset={Header.HEIGHT+Constants.statusBarHeight+10}>
        <TextInput
        style={styles.textbox}
        placeholder="Type Here"
        autofocus={true}
        value={text}
        onChangeText={text => {this.setState({ text })}}
        multiline
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  textbox: {
    textAlignVertical: "top",
    backgroundColor: "white",
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
    flex: 1,
  },
});
