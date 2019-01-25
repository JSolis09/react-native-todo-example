import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import TaskRow from './TaskRow';

const styles = StyleSheet.create({
    container: {
      paddingTop: 40,
      backgroundColor: '#F7F7F7',
      justifyContent: 'flex-start',
      height: '100%'
    },
    button: {
        height: 60,
        borderColor: '#05A5D1',
        borderWidth: 2,
        backgroundColor: '#333',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FAFAFA',
        fontSize: 20,
        fontWeight: '600'
    }
});

class TaskList extends Component {
    constructor(props) {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(props.todos),
        };
    }

    componentWillReceiveProps(nextProps) {
        const dataSource = this.state
            .dataSource
            .cloneWithRows(nextProps.todos);
        this.setState({ dataSource });
    }
    
    renderRow(todo) {
        return <TaskRow todo={todo} onDone={this.props.onDone} />;
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    key={this.props.todos}
                    renderRow={this.renderRow.bind(this)}
                 />
                 <TouchableHighlight style={styles.button} onPress={this.props.onAddStarted}>
                     <Text style={styles.buttonText}> Add One </Text>
                 </TouchableHighlight>
            </View>
        )
    }
}

TaskList.propTypes = {
    onAddStarted: PropTypes.func.isRequired,
    onDone: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        task: PropTypes.string.isRequired
    })).isRequired
}

export default TaskList;