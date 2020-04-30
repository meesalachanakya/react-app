import {Route,Redirect} from "react-router-dom";
import {getAccessToken} from '../../Authentication/utils/StorageUtils.js'
import React from 'react'


class ProtectedRoute extends React.Component{
    
render(){
    alert(getAccessToken())
    const {component,path}=this.props
    alert(component)
    if(getAccessToken()){
       
    return(<Route exact path={path} component={component}/>)}
    else{
        
        <Redirect to={{pathname:'/signinPage'}} />
    }
    }
}

export {ProtectedRoute}