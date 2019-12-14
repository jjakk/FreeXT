import React from "react";
import { View, Text, Button } from "react-native";

export default class NoteScreen extends React.Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View>
        <Text>This is the notes page</Text>
      </View>
    );
  }
}
