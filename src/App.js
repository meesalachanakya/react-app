import React from "react";
import {Car,CarsList} from './components/cars-app/index';
import {TodoListUpdates} from './components/Todo_List_app/index';
import {FormComponents} from './components/assignment-3/form-components';
import CountriesApp from './components/countries/CountriesApp';
import Details from './components/countries/details';
import EmojiGame from './components/EmojiGame/EmojiGame/index.js'
import './components/cars-app/index.css';
import './components/Todo_List_app/index.css';
import './components/countries/CountriesApp.css';
import Home from './components/home.js';
import Loader from 'react-loader-spinner'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  state={
    selectedThemeClassName:'light-mode',
    themeButtonText:'Light mode'
  }
  
  changeTheme=(theme)=>{
    if(theme==='light-mode'){
      this.setState({selectedThemeClassName:'dark-mode',
                      themeButtonText:'Dark mode'})
    }
    else{
      this.setState({selectedThemeClassName:'light-mode',
                      themeButtonText:'Light mode'})
    }
  }
  
  render(){
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/CarsList">
            <CarsList />
          </Route>
          <Route path="/todo_list">
            <TodoListUpdates/>
          </Route>
          <Route path="/form_components">
            <FormComponents />
          </Route>
          <Route exact path="/countriesApp">
            <CountriesApp buttonText={this.state.themeButtonText} changeTheme={this.changeTheme} theme={this.state.selectedThemeClassName} />
          </Route>
          <Route path="/countriesApp/" >
            <Details buttonText={this.state.themeButtonText} changeTheme={this.changeTheme} theme={this.state.selectedThemeClassName}/>
          </Route>
          <Route path="/EmojiGame" children=<EmojiGame/>/>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
  }
}

export default App;
