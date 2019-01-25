import React, { Component } from 'react';
import { View } from 'react-native';

import TaskList from './TaskList';

export default class TodoList extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  state = {
    todos: [
      {
        task: 'Learn React Native',
      },
      {
        task: 'Learn Redux!',
      }
    ]
  };

  onAddStarted() {
    const {navigate} = this.props.navigation;
    navigate('TaskForm', { onAdd: this.onAdd.bind(this) });
  }

  onDone(todo) {
    console.log('task was completed', todo.task);
    const filteredTodos = this.state
      .todos
      .filter((filterTodo) => filterTodo !== todo);
    this.setState({
      todos: filteredTodos
    });
  }

  onAdd(task) {
    const { pop } = this.props.navigation;
    this.setState({
      todos: [
        ...this.state.todos,
        { task }
      ]
    });
    pop();
  }

  render() {
    return (
      <View>
        <TaskList
          todos={this.state.todos}
          onAddStarted={this.onAddStarted.bind(this)}
          onDone={this.onDone.bind(this)}
        />
      </View>
    );
  }
}