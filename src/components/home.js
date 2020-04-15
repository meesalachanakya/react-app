import React from 'react'
import {Link} from "react-router-dom";
 function Home(){
   return(
        <nav>
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
              <Link to="/Example">Example</Link>
            </li>
            <li>
              <Link to='/GridMemoryGame'>GridMemoryGame</Link>
            </li>
            
          </ul>
        </nav>
   )
 }   
export default Home