import {Route,Redirect} from "react-router-dom";
import {getAccessToken} from '../../Authentication/utils/StorageUtils.js'
import React from 'react'


class ProtectedRoute extends React.Component{
    
render(){
    alert(getAccessToken())
    const {component,path}=this.props
    alert(path)
    if(getAccessToken()){
       
    return(<Route exact path={path} component={component}/>)}
    else{
        
       return  <Redirect to={{pathname:'/signinPage'}} />
    }
    }
}

export {ProtectedRoute}