import React from 'react'
import { observable, action } from 'mobx'
import todoStore from '../../../stores/TodoStore';

class AddTodo extends React.Component{
    
    @observable todoTitle=""
    
    @action.bound
    handleChange(event){
        const {value}=event.target
        if(event.charCode===13){
            todoStore.onAddTodo(value)
            event.target.value=''
        }
    }

    render(){
        return(<input type="text" name="" onKeyPress={this.handleChange} />)
    }
}

//const AddTodos=new AddTodo

export default AddTodo