import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import todoStore from '../TodoStore'

class Todo{

    @action.bound
    conustructor(){
        
    }
    
    @action.bound    
    onCompleteTodo(status,id){
        if(status==='Checked'){
        todoStore.todos.map(each=>{if(each.id===id){each.isCompleted=true;return each;}})
        this.selectedFilterList=this.todos
        //console.log(todoStore.todos)
        }
        else{
        todoStore.todos.map(each=>{if(each.id===id){each.isCompleted=false;return each;}})
        this.selectedFilterList=this.todos
        //console.log(todoStore.todos)
        }
        }
      
    @action.bound
    onUpdateTodoTitle(){
        
    }
}

const todo =new Todo()

export default todo