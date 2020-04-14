import React from 'react'
import {observer} from 'mobx-react'
import AddTodo from '../AddTodo'
import TodoList from '../TodoList'
import TodoFooter from '../TodoFooter'



@observer
class TodoApp extends React.Component{
    
    
    
    render(){
    //console.log(todoStore.todos)
        return(
        <div className='h-screen flex flex-col justify-center items-center'>
        <div className="text-4xl text-red-500">Todos</div>
        <AddTodo />
        <TodoList/>
        <TodoFooter/>
        </div>);
    }
}


export default TodoApp