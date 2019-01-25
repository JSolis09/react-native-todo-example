import React, { Component } from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import TaskForm from './TaskForm';
import TodoList from './TodoList';

const AppNavigator = createStackNavigator(
  {
    TodoList: {screen: TodoList},
    TaskForm: {screen: TaskForm}
  },
  {
    initialRouteName: "TodoList"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
