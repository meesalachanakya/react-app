/*global fetch*/
import React from 'react';
import {action,observable} from 'mobx';
import {observer,inject} from 'mobx-react';
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import AddTodo from '../AddTodo';
import TodoList from '../TodoList/index.js';
import TodoFooter from '../TodoFooter';
import LoadingWrapperWithFailure from  '../../common/LoadingWrapperWithFailure'
import NoDataView from '../../common/NoDataView'

const ErrorPage=styled.div`${tw`flex flex-col justify-center items-center`}`;
const Message=styled.div`${tw`text-xl`}`;
const Button=styled.button`${tw`  p-1 bg-blue-700  rounded-md border-solid border-2 border-gray-600`}`;
const Title=styled.div`${tw`text-4xl text-red-500`}`
const ToDoApp=styled.div`${tw`h-screen flex flex-col items-center`}`

@inject('todoStore')
@observer
class TodoApp extends React.Component{
    
    componentDidMount(){
        this.doNetworkCalls()
    }
    

    doNetworkCalls=()=>{
        this.props.todoStore.getTodosAPI();
    }
    
    renderTodosList=()=>{
        const {todos}=this.props.todoStore
        if(todos.length===0){
            return <NoDataView/>;
        }
        else{
            return <TodoList/>
        }
    }
    
    render(){
        return(
        <ToDoApp>
        <Title>Todos</Title>
        <AddTodo />
        <LoadingWrapperWithFailure
            apiStatus={this.props.todoStore.getTodosApiStatus}
            apiError={this.props.todoStore.getTodossApiError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderTodosList}
        
        />
        <TodoFooter/>
        </ToDoApp>);
    }
}

export default TodoApp