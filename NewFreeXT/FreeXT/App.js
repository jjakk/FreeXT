import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
import { FloatingAction } from "react-native-floating-action";
import { Header } from "react-native-elements";
import { SideMenu } from "react-native-side-menu";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

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

class HomeScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
      <Header
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'FreeXT', style: { color: '#fff', fontSize: 25 } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <FloatingAction actions={actions}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  }
});

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
