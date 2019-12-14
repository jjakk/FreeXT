import React from "react";
import { View, Text, Button } from "react-native";

export default class NoteScreen extends React.Component{
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View>
        <Text>Hello World</Text>
        <Button title="Back" onPress={()=>{navigate("Home");}}/>
      </View>
    );
  }
}
