import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import Store from '../'




//import TodoStore from '../TodoStore'



class TodoModel{
    
    @observable todo=""
    @observable isCompleted=false
    id=""
    constructor(TodoObject){
        this.todo=TodoObject.todo,
        this.isCompleted=TodoObject.isCompleted;
        this.id=TodoObject.id;
    }
    
    @action.bound    
    onCompleteTodo(status,id){
        
        const {todoStore}=Store
        //console.log(Store.todoStore,'hiii')
       
       
        if(status==='Checked'){
        todoStore.todos.map(each=>{if(each.id===id){each.isCompleted=true;return each;}});
        this.selectedFilterList=this.todos;
        }
        else{
        todoStore.todos.map(each=>{if(each.id===id){each.isCompleted=false;return each;}});
        this.selectedFilterList=this.todos;
        //console.log(todoStore.todos)
        }
    }
}

export default TodoModel;