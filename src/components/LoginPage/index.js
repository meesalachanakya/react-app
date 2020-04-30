import React from 'react'
import tw  from 'tailwind.macro'
import {observable} from 'mobx'
import {Redirect} from 'react-router-dom'
import {observer} from 'mobx-react'
import {setAccessToken,getAccessToken} from '../../utils/StorageUtils.js'


@observer
class LoginPage extends React.Component{
    
    @observable password
    
    
    passwordEntering=(event)=>{
        this.password=event.target.value
    }
    
    authentication=()=>{
        setAccessToken(this.password)
        this.password=""
    
    }

    render(){
        if(getAccessToken()){
            //console.log(getAccessToken())
        return  <Redirect to={{pathname:'/projects'}}/>
         
        }
        else{
        return(<div className="flex flex-col">
            <input type='text' placeholder='enter User Name'/>
            <input type='password' value={this.password} onChange={this.passwordEntering} placeholder='enter password'/>
            <button onClick={this.authentication}>SignUp</button>
            </div>
            )
    }
    
}
}


export default LoginPage