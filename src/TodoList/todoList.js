import React from 'react';
import TodoItem from '../TodoItem/todoItem';
import '../App.css';


class TodoList extends React.Component{
    render(){
        const{todos} = this.props; // can retrieve multiple items and same as === consts todos = this.props.todos;
        return(
        <div className='todoListContainer'>
            {
                todos.map((_todo, _index) => {
                    return(
                        <TodoItem updateTodoFn={this.updateTodo} key={_index} todo={_todo}></TodoItem> // need key and item
                    )
                })
            }
        </div>
        );
    }

    updateTodo = (todo) => {
        this.props.updateTodoFn(todo);
    }
}

export default TodoList;