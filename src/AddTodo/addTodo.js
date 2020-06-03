import React from 'react';
import '../App.css';

class AddTodo extends React.Component{
    constructor(){
        super();
        this.state ={
            todo: ''
        }
    }
    render(){
        return(
        <div className="addTodoContainer">
            <form id="todoForm" onSubmit={(e) => this.submitTodo(e)}>
                
                <input id='addTodoInput' onChange={(e) => this.updateInput(e)} type='text' placeholder="Enter Text"></input>
                <button type="submit">Add Todo</button>
            </form>
        </div>
        );
    }

    updateInput = (e) => {
     this.setState({todo: e.target.value});
    }

    submitTodo = (e) =>  {
        e.preventDefault();
        this.props.addTodoFn(this.state.todo);
        document.getElementById('addTodoInput').value = ''; // empty the text field after submit
    }
}

export default AddTodo;