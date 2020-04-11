import React from 'react'
import { observable, action } from 'mobx'
import {observer} from 'mobx-react'
import AddTodo from '../AddTodo/index.js'
import TodoList from '../TodoList/index.js'
import TodoFooter from '../TodoFooter/index.js'
import todoStore from '../../../stores/TodoStore';
import tw from 'tailwind.macro'


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