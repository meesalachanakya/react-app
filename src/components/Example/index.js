

import React from 'react'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
@observer
class Example extends React.Component{
    state ={
       title:"Reat-practise",
       author:{
           name:"chanakya"
           
       },
        likes:["cricket","hindi Teacher","sinnging"]
}
    changingState=()=>{
       // this.message.title="mobx";
        this.setState({title:"mobx"})
    }
    
    render(){
         //console.log(this.state.title)
        return(
            <div>
                 <button className="m-4" onClick={this.changingState}>checking</button>
                 
                {this.state.title} 
               </div>
            
        )
        
    }
}


export default Example





/*
import React from 'react'
import {observable} from 'mobx'
import {Provider,inject,observer} from 'mobx-react'

class A extends React.Component{
    render(){
        return(<Provider temp='Chanakya'>
            <B temp={'in b'} />
            </Provider>)
    }
}


@inject('temp')
@observer
class B extends React.Component{
    
    @observable name=""
    
    onChange=(event)=>{
        this.name=event.target.value
    }
    
    render(){
        console.log(temp)
        const{temp}=this.props
        return(<div>
        <input className='m-3 border-solid border-2 border-black' defaultValue={this.name} onChange={this.onChange}/>
        <C name={this.name}/>
        </div>)
    }
}


@inject('temp','name')
class C extends React.Component{
    render(){
        const {temp,name}=this.props
        console.log(name)
        return(<div>{temp} {name}</div>)
    }
}

export {A,B,C}
*/