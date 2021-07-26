import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import NoteScreen from './src/screens/NoteScreen';
import { Provider } from './src/context/NotesContext';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Note: NoteScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'FreeXT'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
