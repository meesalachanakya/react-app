import React from 'react';
class TodoTask extends React.Component{
    constructor(props){
        super(props);
        this.state={
            taskChecked:false,
            textClassName:"aboutTask",
            completedTasks:[]
        }
    } 
    
    completedTask=(event)=>{
        if(event.target.checked){
            this.setState({textClassName:"text-line-through"});
            this.setState({taskChecked:true});
            this.props.length("decrement");
            this.props.completed(this.props.id,"add")
            this.props.active(this.props.id,"remove")
        }
        else{
            this.setState({textClassName:"aboutTask"});
            this.setState({taskChecked:false});
            this.props.length("increment");
            this.props.completed(this.props.id,"remove")
            this.props.active(this.props.id,"add")
        }
    }
    
    render(){
        return(
            <div className="taskStatus">
                <input className="checkbox" onClick={this.completedTask} type="checkbox"/>
                <input disabled={this.state.taskChecked===true}  className={this.state.textClassName} defaultValue={this.props.value}/>
                <button className="delete-button" onClick={()=>this.props.remove(this.props.id)}><span></span></button>
            </div>
        )
    }
}


class TodoListUpdates extends React.Component{
          constructor(props){
            super(props);
            this.state={
                todoList:[],
               todoListAll:[],
               todoListActive:[],
               todoListCompleted:[],
               task:"",
               pendingTasksCount:0,
               footerClassName:"nofooter"
            };
        }
        
        onKeyPress=(event)=>{
            if(event.charCode===13){
                if(event.target.value.length){
                this.setState({task:event.target.value});
                event.target.value="";
                this.taskCount("increment");
                this.state.todoList.push(parseInt(this.state.todoList.length)+1);
                this.state.todoListActive.push(parseInt(this.state.todoList.length)+1)
                this.setState({footerClassName:'footer'});
                console.log(this.state)
                }
            }
        }
        
        removeTask=(id)=>{
            let previousState=this.state.todoList;
            previousState=previousState.filter((each)=>id!==each);
            this.setState({todoList:previousState});
            this.taskCount("decrement");
            if(!(parseInt(this.state.todoList.length)-1)){
                this.setState({footerClassName:'nofooter'});
            }
        }
        
        displayAll=()=>{
            this.setState({todoList:this.state.todoListAll})
        }
        
        forActiveTasks=(taskid,action)=>{
          if(action==="add"){
                let previousState=this.state.todoListActive;
                previousState.push(taskid);
                this.setState({todoListActive:previousState})
            }
            else{
                let previousState=this.state.todoListActive;
                previousState=previousState.filter((each)=>parseInt(taskid)!==parseInt(each));
                this.setState({todoListActive:previousState});
            }
        }
        
        displayActive=()=>{
            this.setState({todoListAll:this.state.todoList});
            this.setState({todoList:this.state.todoListActive});
        }
        
        completedTasks=(taskid,action)=>{
            if(action==="add"){
                let previousState=this.state.todoListCompleted;
                previousState.push(taskid);
                this.setState({todoListCompleted:previousState});
            }
            
            else{
                let previousState=this.state.todoListCompleted;
                previousState=previousState.filter((each)=>parseInt(taskid)!==parseInt(each));
                this.setState({todoListCompleted:previousState});
            }
           
        }
        
        displayCompleted=()=>{
            this.setState({todoListAll:this.state.todoList});
            this.setState({todoList:this.state.todoListCompleted});
         }
        
        taskCount=(change)=>{
            let count
            if(change==="increment"){
                count=this.state.pendingTasksCount+1
                this.setState({pendingTasksCount:count});
            }
            else{
                count=this.state.pendingTasksCount-1
                this.setState({pendingTasksCount:count});
            }
        }
        
        displayPendingendingTasksCount=()=>{
            return(<div>{this.state.pendingTasksCount} items left</div>);
        }
    render(){  
        return(<div className="todo-app">
            <div className="heading">todos</div>
                <div className="todo-content">
                <div className="input-field-div">
                    <input type="text" id="todoItems" onKeyPress={this.onKeyPress} className="input-field" name="" placeholder="What need to be done?" />
                    <div>{this.state.todoList.map(each=><TodoTask key={each} id={each} active={this.forActiveTasks} completed={this.completedTasks} length={this.taskCount} value={this.state.task} remove={this.removeTask}/>)}</div>
                </div>
                <div className={this.state.footerClassName}>
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
export {TodoListUpdates};


/*
import React from 'react';
class TodoTask extends React.Component{
    state={
        taskChecked:false,
        textClassName:"aboutTask",
    }
    
    
    render(){
        return(
            <div className="taskStatus">
                <input className="checkbox" onClick={this.completedTask} type="checkbox"/>
                <input disabled={this.state.taskChecked===true}  className={this.state.textClassName} defaultValue={this.props.value}/>
                <button className="delete-button" onClick={()=>this.props.remove(this.props.id)}><span></span></button>
            </div>
        )
    }
}


class TodoListUpdates extends React.Component{
    state={
        todosList:[],
        Id:0,
    }
}

ReactDOM.render(<TodoTask />,document.getElementById('root'));
*/



























