import React from 'react'
import {action} from 'mobx'
import {observer,inject} from 'mobx-react'

import tw from 'tailwind.macro'

const Button=tw.button`bg-white border-solid border-2 border-black m-1`

const Footer=tw.div`flex p-20 m-50 border`

@inject('todoStore')
@observer
class TodoFooter extends React.Component{
    
    @action.bound
    onChangeSelectedFilter(event){
        this.props.todoStore.onChangeSelectedFilter(event.target.value)
    }
    @action.bound
    onClickClearCompleted(){
        //console.log(this.props.todoStore)
       this.props.todoStore.onClearCompleted()
    }
    
    render(){
        //console.log('-->',todoStore.activeTodosCount)
        //todoStore.todos.length
        const count=this.props.todoStore.activeTodosCount;
        return(<Footer style={{display:this.props.todoStore.todos.length>0?'flex':'none'}}>
        <div>{count} items left</div>
        <div className='flex'>
        <Button onClick={this.onChangeSelectedFilter} value="ALL">All</Button>
        <Button onClick={this.onChangeSelectedFilter} value="ACTIVE">Active</Button>
        <Button onClick={this.onChangeSelectedFilter} value="COMPLETED">Completed</Button>
        </div>
        <div>
            <Button onClick={this.onClickClearCompleted} >Clear Completed</Button>
        </div>
        
        </Footer>)
    }
}
export default TodoFooter