import React from 'react'
import { observable, action } from 'mobx'
import {observer,inject} from 'mobx-react'


import Todo from '../Todo'

@inject('todoStore')
@observer
class TodoList extends React.Component{
    
    
    
    
    
    render(){
        //console.log(this.props.todoStore.todos)
        const {getUsersApiStatus,getUsersApiError}=this.props.todoStore
        //console.log(getUsersApiStatus
        const Todos=this.props.todoStore.todos.map((each)=><Todo key={Math.random()} todo={each}/>)
        //<Todo key=Math.random() todo=each/>})
        return(
            <div>{Todos}</div>
            )
          //return(<div>hiiii</div>)
    }
}

export default TodoList