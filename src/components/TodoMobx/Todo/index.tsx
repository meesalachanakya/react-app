import React from 'react'
import {action } from 'mobx'
import {observer} from 'mobx-react'
import TodoModel from '../../../stores/models';
import todoStore from '../../../stores/TodoStore';

type Todos={
    todo:any
    id:string
    isCompleted:boolean
}

@observer
class Todo extends React.Component<Todos>{
    
    
    @action.bound
    onCompleteTodo(event){
        if(event.target.checked){
        TodoModel.onCompleteTodo('Checked',this.props.todo.id)}
        else{
            TodoModel.onCompleteTodo('Unchecked',this.props.todo.id)
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
        const {isCompleted}=this.props.todo
        
        return(
            <div>
                <input type="checkbox" defaultChecked={isCompleted} onClick={this.onCompleteTodo}/>
                <input disabled={isCompleted===true} defaultValue={this.props.todo.todo}/>
                <button onClick={this.onRemoveTodo} ><b>X</b></button>
            </div>
            )
    }
}

export default Todo