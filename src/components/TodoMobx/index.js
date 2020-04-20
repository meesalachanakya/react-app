import React from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';
//import {configure} from 'mobx'

//configure ({enforceActions:'observed'})

class TodoTask extends React.Component{
    @observable taskChecked=false;
    @observable textClassName='aboutTask';
    @observable completedTask=[];
    
    //@action.bound
    completedTask(event){
        if(event.target.checked){
            this.textClassName="text-line-through";
            this.taskChecked=true;
            this.props.length("decrement");
            this.props.completed(this.props.id,"add");
            this.props.active(this.props.id,"remove");
        }
        else{
            this.textClassName="aboutTask";
            this.taskChecked=false;
            this.props.length("increment");
            this.props.completed(this.props.id,"remove");
            this.props.active(this.props.id,"add");
        }
    }
    
    render(){
        return(
            <div className="taskStatus">
                <input className="checkbox" onClick={this.completedTask} type="checkbox"/>
                <input disabled={this.taskChecked===true}  className={this.textClassName} defaultValue={this.props.value}/>
                <button className="delete-button" onClick={()=>this.props.remove(this.props.id)}><span><b>X</b></span></button>
            </div>
        )
    }
}


@observer
class TodoApp extends React.Component{
        @observable todoList=[]
        @observable todoListAll=[]
        @observable todoListActive=[]
        @observable todoListCompleted=[]
        @observable task=''
        @observable pendingTasksCount=0
        @observable footerClassName='nofooter'
        
        
        @action.bound
        onKeyPress(event){
            if(event.charCode===13){
                if(event.target.value.length){
                this.task=event.target.value;
                event.target.value="";
                this.taskCount("increment");
                this.todoList.push(parseInt(this.todoList.length)+1);
                this.todoListActive.push(parseInt(this.todoList.length)+1);
                this.footerClassName='footer';
                }
            }
        }
        
        @action.bound
        removeTask(id){
            let previousState=this.todoList;
            previousState=previousState.filter((each)=>id!==each);
            this.todoList=previousState;
            this.taskCount("decrement");
            if(!(parseInt(this.todoList.length)-1)){
                this.footerClassName='nofooter';
            }
        }
        
        @action.bound
        displayAll(){
            this.todoList=this.todoListAll;
        }
        
        @action.bound
        forActiveTasks(taskid,action){
          if(action==="add"){
                let previousState=this.todoListActive;
                previousState.push(taskid);
                this.todoListActive=previousState;
            }
            else{
                let previousState=this.todoListActive;
                previousState=previousState.filter((each)=>parseInt(taskid)!==parseInt(each));
                this.todoListActive=previousState;
            }
        }
        
        @action.bound
        displayActive(){
            this.todoListAll=this.todoList;
            this.todoList=this.todoListActive;
        }
        
        @action.bound
        completedTasks(taskid,action){
            if(action==="add"){
                let previousState=this.todoListCompleted;
                previousState.push(taskid);
                this.todoListCompleted=previousState;
            }
            
            else{
                let previousState=this.todoListCompleted;
                previousState=previousState.filter((each)=>parseInt(taskid)!==parseInt(each));
                this.todoListCompleted=previousState;
            }
        }
        
        @action.bound
        displayCompleted(){
            this.todoListAll=this.todoList;
            this.todoList=this.todoListCompleted;
         }
        
        @action.bound
        taskCount(change){
            let count;
            if(change==="increment"){
                count=this.pendingTasksCount+1;
                this.pendingTasksCoun=count;
            }
            else{
                count=this.pendingTasksCount-1;
                this.pendingTasksCount=count;
            }
        }
        
        @action.bound
        displayPendingendingTasksCount(){
            return(<div>{this.pendingTasksCount} items left</div>);
        }
    render(){  
        return(<div className="todo-app">
            <div className="heading">todos</div>
                <div className="todo-content">
                <div className="input-field-div">
                    <input type="text" id="todoItems" onKeyPress={this.onKeyPress} className="input-field" name="" placeholder="What need to be done?" />
                    <div>{this.todoList.map(each=><TodoTask key={each} id={each} active={this.forActiveTasks} completed={this.completedTasks} length={this.taskCount} value={this.task} remove={this.removeTask}/>)}</div>
                </div>
                <div className={this.footerClassName}>
                    <div className="no-of-items">{this.displayPendingendingTasksCount()}</div>
                    <div className="actions">
                        <div className="all" onClick={this.displayAll} >All</div>
                        <div className="active" onClick={this.displayActive}>Active</div>
                        <div className="completed" onClick={this.displayCompleted}>completed</div>
                        <div className="clearCompleted">clearCompleted</div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
//ReactDOM.render(<TodoListUpdates />,document.getElementById('root'));
export default TodoApp;