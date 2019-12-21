import React from "react";
import { View, Text, Button, TextInput, StyleSheet, Dimensions, ScrollView } from "react-native";
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator, Header } from "react-navigation-stack";
import Constants from 'expo-constants';

export default class NoteScreen extends React.Component{
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title"),
    };
  };
  render(){
    const { navigation } = this.props;
    if(navigation.getParam("type") == "regular"){
      return(
        <View>
          <ScrollView><TextInput style={styles.textbox} multiline={true} placeholder="Type Here" autofocus={true}/></ScrollView>
        </View>
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
  textbox: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-Header.HEIGHT,
    backgroundColor: "#e8e8e8",
    textAlignVertical: "top",
    padding: 10,
    fontSize: 18,
  },
});
