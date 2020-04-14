import React from 'react'
import {observable, action,computed,reaction} from 'mobx'
import TodoModel from '../models'


class TodoStore<todos> {
    @observable todos=[]
    @observable selectedFilter="ALL"
    @observable selectedFilterList=[]
    
    
    @action.bound
    onAddTodo(todo){
        
        const TodoObject={
            todo:todo,
            isCompleted:false,
            id:Math.random().toString()
        }
        const todoModel=new TodoModel(TodoObject)
        
        this.todos.push(todoModel)
        
        /*
        this.todos.push({id:Math.random().toString(),todo:todo,isCompleted:false})*/
        
        
        this.selectedFilterList=this.todos
        //console.log(this.todos)
    }
              
    
    
    @action.bound
    onRemoveTodo(id){
        const filteredTodos=this.todos.filter(each=>{if(each.id!==id){return each}})
        this.todos=filteredTodos
        this.selectedFilterList=filteredTodos
        //console.log(this.todos)
    }
    
    @action.bound
    onChangeSelectedFilter(filter){
        this.selectedFilter=filter
        this.filteredTodos()
        //console.log(filter)
    }
    
    
    @action.bound
    filteredTodos(filter){
       switch(this.selectedFilter){
           case 'ALL':return(this.todos=this.selectedFilterList)
           case 'ACTIVE':return(this.todos=this.selectedFilterList.filter((each)=>{if(each.isCompleted===false){return each}}))
           case 'COMPLETED':return(this.todos=this.selectedFilterList.filter((each)=>{if(each.isCompleted===true){return each}}))
       }
    }
    
    
    @action.bound
    onClearCompleted(){
           this.todos=this.selectedFilterList.filter(each=>{if(each.isCompleted===false) {return each}})
           this.selectedFilterList=this.todos
    }
    
    @computed 
    get activeTodosCount(){
      return this.todos.filter(each=>each.isCompleted===false).length
    }
    
    todoReaction=reaction(()=>this.todos.filter(each=>each.isCompleted===false).length,(length)=>{if(length===0){alert('congo')}})
    
    /*
    @computed
    get filteredTodos(){
        //console.log(filter)
    }
    */
}

const todoStore=new TodoStore()

export {todoStore as default,TodoStore}