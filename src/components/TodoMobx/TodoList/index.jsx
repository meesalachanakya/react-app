import React from 'react'
import { observable, action } from 'mobx'
import {observer} from 'mobx-react'
import todoStore from '../../../stores/TodoStore';


import Todo from '../Todo'

@observer
class TodoList extends React.Component{
    
    render(){
        const length=todoStore.todos.length
        //console.log(todoStore.todos)
        const Todos=todoStore.todos.map(each=><Todo key={Math.random()} todo={each}/>)
        return(<div>
            {length?<div>{Todos}</div>
                :<div>No data found</div>}
            </div>)
    }
}

export default TodoList