import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import todoStore from '../TodoStore'
import TodoStore from '../TodoStore'


export type TodoObjectType={
todo:string
isCompleted:boolean
id:string
}



class TodoModel{
    
    @observable todo:string=""
    @observable isCompleted:boolean
    id:string=""
    constructor(TodoObject:TodoObjectType){
        this.todo=TodoObject.todo,
        this.isCompleted=TodoObject.isCompleted
        this.id=TodoObject.id
    }

    
    
    
    @action.bound    
    onCompleteTodo(status,id){
        if(status==='Checked'){
        todoStore.todos.map(each=>{if(each.id===id){each.isCompleted=true;return each;}})
        this.selectedFilterList=this.todos
        }
        else{
        todoStore.todos.map(each=>{if(each.id===id){each.isCompleted=false;return each;}})
        this.selectedFilterList=this.todos
        //console.log(todoStore.todos)
        }
    }
}

export default TodoModel