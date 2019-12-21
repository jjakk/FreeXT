import React from "react";
import { View, Text, Button } from "react-native";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

export default class NoteScreen extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
    };
  };
  render(){
    const { navigation } = this.props;
    return(
      <View>
        <Text>This notes page : {navigation.getParam("title")}</Text>
      </View>
    );
  }
}
