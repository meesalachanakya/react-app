import React from 'react'
import {action } from 'mobx'
import {inject,observer} from 'mobx-react'
import tw from 'tailwind.macro'
import TodoModel from '../../../stores/models';
//import todoStore from '../../../stores/TodoStore';


const Task=tw.div``

@inject('todoStore')
@observer
class Todo extends React.Component{
    
    
    @action.bound
    onCheckboxClick(event){
        
        const {todo}=this.props;
        const todoModel=new TodoModel(todo);
        if(event.target.checked){
        todoModel.onCompleteTodo('Checked',todo.id);
        }
        else{
            todoModel.onCompleteTodo('Unchecked',todo.id);
        }
    }
    
    
    @action.bound
    onRemoveTodo(event){
        this.props.todoStore.onRemoveTodo(this.props.todo.id);
    }
    
    @action.bound
    onUpdateTodoTitle(){
        
    }
    
    render(){
        const {isCompleted}=this.props.todo;
        return(
            <Task>
                <input type="checkbox" defaultChecked={isCompleted} onClick={this.onCheckboxClick}/>
                <input disabled={isCompleted===true} defaultValue={this.props.todo.todo}/>
                <button onClick={this.onRemoveTodo} ><b>X</b></button>
            </Task>
            );
    }
}

export default Todo;