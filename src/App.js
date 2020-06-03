import React from 'react';
import './App.css';
import TodoList from './TodoList/todoList';
import TodoItem from './TodoItem/todoItem';

class App extends React.Component{
  render(){
    return(
      <div>
        <TodoList></TodoList>
        <TodoItem></TodoItem>
      </div>
    
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');
    if(todos){
      console.log('Has todos', todos);
    } else {
      console.log('No todos');
    }
  }

}

export default App;
