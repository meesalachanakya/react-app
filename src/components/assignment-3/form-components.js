import React from 'react';
import Greetings from './greetings'
import FavouriteDessert from './fav-dessert.js'
import YourState from './your_state.js'
import DisabledButton from './disable_button.js'
import VisitedCities from './visited_cities.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function FormComponents(){
    return(
        <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/greet">Greetings</Link>
            </li>
            <li>
              <Link to="/favourite_dessert">Favourite Dessert</Link>
            </li>
            <li>
              <Link to="/visited_cities">Visited Cities</Link>
            </li>
            <li>
              <Link to="/your_state">Your State</Link>
            </li>
            <li>
              <Link to="/disable_button">Disable Button</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/greet">
            <Greetings/>
          </Route>
          <Route path="/favourite_dessert">
            <FavouriteDessert DessertList={["Vanilla", "Butterscotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"]}/>
          </Route>
          <Route path="/visited_cities">
            <VisitedCities CitiesList={["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]}/>
          </Route>
          <Route path="/your_state">
            <YourState StatesList={["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]}/>
          </Route>
          <Route path="/disable_button">
            <DisabledButton/>
          </Route>
        </Switch>
      </div>
    </Router>
        
        
        
        
        
        
        
        
        
        
        
        /*<div>
            <ul>
                <li>Greetings</li>
                <li>Favourite Dessert</li>
                <li>Visited Cities</li>
                <li>Your State</li>
                <li>Disable Button</li>
            </ul>
        </div>
        */
    )
}

export {FormComponents}