import React from 'react'
import { Link, Redirect, withRouter } from "react-router-dom";
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import { clearUserSession } from '../utils/StorageUtils.js'

@observer
class Home extends React.Component {
  //  @observable xs=false

  /*   
     signOut=()=>{
      clearUserSession()
      this.xs=true
       //this.props.history.push("/")
      }
     
    */
  render() {
    //  if(this.xs){
    //   return(<Redirect to={{pathname:'/'}}   />)
    //  }
    return (
      <nav>
        <button  onClick={this.signOut}>SignOut</button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/CarsList">cars</Link>
            </li>
            <li>
              <Link to="/todo_list">todo_list</Link>
            </li> 
            <li>
              <Link to="/form_components">form components</Link>
            </li>
            <li>
              <Link to="/countriesApp">Countries</Link>
            </li>
            <li>
              <Link to="/EmojiGame">EmojiGame</Link>
            </li>
            <li>
              <Link to="/counter-page">Counter page</Link>
            </li>
            <li>
              <Link to="/TodoMobx">Todo Mobx</Link>
            </li>
            <li>
              <Link to="/EventMobx">Event App</Link>
            </li>
            <li>
              <Link to='/GridMemoryGame'>GridMemoryGame</Link>
            </li>
            <li>
              <Link to='/Example'>Example</Link>
            </li>
            
            <li>
              <Link to='/users'>UserList</Link>
            </li>
            <li>
              <Link to='/ecommerce-store/products'>E-commerce </Link>
            </li>
            <li>
              <Link to='/practice-advanced-concepts'>practice_advanced_concepts</Link>
            </li>
           {/*
            <li>
              <Link to='/'>Login</Link>
            </li>*/}
          </ul>
        </nav>
    )
  }
}
export default withRouter(Home)
