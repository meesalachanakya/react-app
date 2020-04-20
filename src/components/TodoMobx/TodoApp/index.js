/*global fetch*/
import React from 'react';
import {action,observable} from 'mobx';
import { BallBeat } from 'react-pure-loaders';
import {observer} from 'mobx-react';
import styled from '@emotion/styled'
import tw from 'tailwind.macro'

import AddTodo from '../AddTodo';
import TodoList from '../TodoList';
import TodoFooter from '../TodoFooter';
import todoStore from '../../../stores/TodoStore';

const ErrorPage=styled.div`${tw`flex flex-col justify-center items-center`}`;
const Message=styled.div`${tw`text-xl`}`;
const Button=styled.button`${tw`  p-1 bg-blue-700  rounded-md border-solid border-2 border-gray-600`}`;


@observer
class TodoApp extends React.Component{
    
    @observable isLoading=true
    @observable errorLoading=false
    
    componentDidMount(){
        this.onFetch()
    }
    
    @action.bound
    onFetch(){
        this.errorLoading=false
        fetch('https://jsonplaceholder.typicode.com/todos').then(res=>{return res.json()})
                .then(res=>res.forEach((todo)=>{todoStore.onAddTodo(todo,Math.random()),this.isLoading=false}))
                .catch(err=>this.errorLoading=true);
    }
    
    render(){
        return(
        <div className='h-screen flex flex-col justify-cent items-center'>
        <div className="text-4xl text-red-500">Todos</div>
        <AddTodo />
        {this.isLoading?this.errorLoading?
        <ErrorPage>
            <Message>Somthing went wrong!!!!</Message>
            <Button onClick={this.onFetch}>Retry</Button>
        </ErrorPage>:
        <BallBeat color={'black'} loading={true}/>
        :<TodoList/>}
        <TodoFooter/>
        </div>);
    }
}

export default TodoApp