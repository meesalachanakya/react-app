import React from 'react'
import { observable, action } from 'mobx'
import {observer} from 'mobx-react'
import todo from '../../../stores/models';
import todoStore from '../../../stores/TodoStore';

@observer
class Todo extends React.Component{
    
    
    @action.bound
    onCompleteTodo(event){
        if(event.target.checked){
        todo.onCompleteTodo('Checked',this.props.todo.id)}
        else{
            todo.onCompleteTodo('Unchecked',this.props.todo.id)
        }
    }
    
    @action.bound
    onRemoveTodo(event){
        todoStore.onRemoveTodo(this.props.todo.id)
        //console.log(this.props.todo.id)
    }
    
    @action.bound
    onUpdateTodoTitle(){
        
    }
    
    render(){
        //console.log(this.props.todo.isCompleted)
        return(
            <div>
                <input type="checkbox" defaultChecked={this.props.todo.isCompleted} onClick={this.onCompleteTodo}/>
                <input disabled={this.props.todo.isCompleted===true} defaultValue={this.props.todo.todo}/>
                <button onClick={this.onRemoveTodo} ><b>X</b></button>
            </div>
            )
    }
}

export default Todo