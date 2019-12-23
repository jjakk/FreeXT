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
    if(navigation.getParam("type") == "regular"){
      const { text } = this.state;
      return(
        <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={Header.HEIGHT+Constants.statusBarHeight}>
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
    else{
      return (
        <View>
          <Text>This is a list page</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8e8e8",
    flex: 1,
    height: Dimensions.get('window').height-Header.HEIGHT,
  },
  textbox: {
    textAlignVertical: "top",
    backgroundColor: "white",
    padding: 10,
    fontSize: 18,
  },
});
