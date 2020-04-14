import React from 'react'
import { observable, action } from 'mobx'
import {observer} from 'mobx-react'
import todoStore from '../../../stores/TodoStore';
import Todo from '../Todo'

@observer
class TodoList extends React.Component{
    
    render(){
        //console.log(todoStore.todos)
        const Todos=todoStore.todos.map(each=><Todo key={Math.random()} todo={each}/>)
        return(
            <div>
                {Todos}
            </div>
            )
    }
}

export default TodoList