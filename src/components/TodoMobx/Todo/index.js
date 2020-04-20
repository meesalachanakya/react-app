import React from 'react'
import {action } from 'mobx'
import {observer} from 'mobx-react'
import TodoModel from '../../../stores/models';
import todoStore from '../../../stores/TodoStore';


@observer
class Todo extends React.Component{
    
    
    @action.bound
    onCompleteTodo(event){
        
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
        todoStore.onRemoveTodo(this.props.todo.id);
    }
    
    @action.bound
    onUpdateTodoTitle(){
        
    }
    
    render(){
        const {isCompleted}=this.props.todo;
        
        return(
            <div>
                <input type="checkbox" defaultChecked={isCompleted} onClick={this.onCompleteTodo}/>
                <input disabled={isCompleted===true} defaultValue={this.props.todo.todo}/>
                <button onClick={this.onRemoveTodo} ><b>X</b></button>
            </div>
            );
    }
}

export default Todo;