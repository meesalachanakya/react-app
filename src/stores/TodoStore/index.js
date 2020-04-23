/*global fetch*/
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import {observable, action,computed,reaction} from 'mobx'
import TodoModel from '../models'


class TodoStore {
    @observable getTodosApiStatus
    @observable getTodosApiError
    @observable todos
    @observable selectedFilter
    selectedFilterList
    todoService
    
    constructor(todoService){
        this.init()
        this.todoService=todoService
    }
    
    @action.bound
    init(){
        this.getTodosApiError=null
        this.todos=[]
        this.selectedFilter='ALL'
        this.selectedFilterList=[]
    }
    
    @action
    clearStore(){
        this.init()
    }
    
    @action.bound
    setTodosAPIResponse(todoResponse){
        //alert('hi')
        //console.log(todoResponse)
         todoResponse.map((response)=>{this.onAddTodo(response,1)})
    }
    
    
    
    @action.bound
    setTodosAPIError(error){
        this.getTodosApiError=error
    }
    
    @action.bound
    setTodosAPIStatus(apiStatus){
        this.getTodosApiStatus=apiStatus
        //console.log(this.getTodosApiStatus)
    }
    
    @action.bound
    getTodosAPI(){
        const todosPromise=this.todoService.getTodosAPI()
        
        return bindPromiseWithOnSuccess(todosPromise)
                .to(this.setTodosAPIStatus,this.setTodosAPIResponse)
                    .catch(this.setTodosAPIError)
    }
   
   
   
   
    
    @action.bound
    onAddTodo(todo,keyPressed){
        
        let TodoObject
        if(keyPressed===13){
        TodoObject={
            todo:todo,
            isCompleted:false,
            id:Math.random().toString()
            }
        }
        else{
            
        TodoObject={
            todo:todo.title,
            isCompleted:todo.completed,
            id:todo.id}
        };
        const todoModel=new TodoModel(TodoObject);
        this.todos.push(todoModel);
        this.selectedFilterList=this.todos;
    }
    
              
    @action.bound
    onRemoveTodo(id){
        const filteredTodos=this.todos.filter(each=>{if(each.id!==id){return each}});
        this.todos=filteredTodos;
        this.selectedFilterList=filteredTodos;
    }
    
    @action.bound
    onChangeSelectedFilter(filter){
        this.selectedFilter=filter;
        this.filteredTodos();
    }
    
    @action.bound
    filteredTodos(){
       switch(this.selectedFilter){
           case 'ALL':return(this.todos=this.selectedFilterList);
           case 'ACTIVE':return(this.todos=this.selectedFilterList.filter((each)=>{if(each.isCompleted===false){return each}}));
           case 'COMPLETED':return(this.todos=this.selectedFilterList.filter((each)=>{if(each.isCompleted===true){return each}}));
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
}

export default TodoStore