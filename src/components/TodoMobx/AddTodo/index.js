import React from 'react'
import { observable, action } from 'mobx'
import {inject} from 'mobx-react'
import tw from 'tailwind.macro'
//import todoStore from '../../../stores/TodoStore';


const Input=tw.input``

@inject('todoStore')
class AddTodo extends React.Component{
    
    @observable todoTitle=""
    
    @action.bound
    handleChange(event){
        const {value}=event.target
        if(event.charCode===13&&value.length){
            this.props.todoStore.onAddTodo(value,13)
            event.target.value=''
        }
    }

    render(){
        return(<Input type="text" name="" placeholder='what toDo?' onKeyPress={this.handleChange} />)
    }
}

//const AddTodos=new AddTodo

export default AddTodo