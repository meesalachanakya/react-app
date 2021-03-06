import { Route, Redirect } from "react-router-dom";
import { getAccessToken } from '../../Authentication/utils/StorageUtils.js'
import React from 'react'


function ProtectedRoute(props) {


 const { component, path } = props
 if (getAccessToken()) {
  return (<Route exact path={path} component={component}/>)
 }
 else {
  return (<Route exact path={path} component={component}/>)
  //return  <Redirect to={{pathname:'/ecommerce-store/signin'}} />

 }
}

export { ProtectedRoute }
