import React from 'react'
import {action} from 'mobx'
import {observer} from 'mobx-react'
import todoStore from '../../../stores/TodoStore';

@observer
class TodoFooter extends React.Component{
    
    @action.bound
    onChangeSelectedFilter(event){
        todoStore.onChangeSelectedFilter(event.target.value)
    }
    
    onClearCompleted(){
       todoStore.onClearCompleted() 
    }
    
    render(){
        //console.log('-->',todoStore.activeTodosCount)
        //todoStore.todos.length
        const count=todoStore.activeTodosCount;
        return(<div style={{display:todoStore.todos.length>0?'flex':'none'}} className="flex p-20 m-50 border">
        <div>{count} items left</div>
        <div className='flex'>
        <button className='bg-white border-solid border-2 border-black m-1' onClick={this.onChangeSelectedFilter} value="ALL">All</button>
        <button className='bg-white border-solid border-2 border-black m-1' onClick={this.onChangeSelectedFilter} value="ACTIVE">Active</button>
        <button className='bg-white border-solid border-2 border-black m-1' onClick={this.onChangeSelectedFilter} value="COMPLETED">Completed</button>
        </div>
        <div>
            <button onClick={this.onClearCompleted} value="CLEARCOMPLETED" >Clear Completed</button>
        </div>
        
        </div>)
    }
}
export default TodoFooter