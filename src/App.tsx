import React from "react";
import {Car,CarsList} from './components/cars-app/index';
import {TodoListUpdates} from './components/Todo_List_app/index';
import {FormComponents} from './components/assignment-3/form-components';
import CountriesApp from './components/countries/CountriesApp';
import Details from './components/countries/details';
import EmojiGame from './components/EmojiGame/EmojiGame/index.js'
import TodoApp from './components/TodoMobx/TodoApp/index.js'
import EventApp from './components/EventApp/EventApp'
import {A,B,C} from './components/Example'
import './components/cars-app/index.css';
import './components/Todo_List_app/index.css';
import './components/countries/CountriesApp.css';
import Home from './components/home.js';
import Loader from 'react-loader-spinner'
import CounterPage from './components/CounterPage'
import {observable,action} from 'mobx';
import {configure} from 'mobx'
import {observer} from 'mobx-react'
import themeStore from './stores/ThemeStore'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//configure ({enforceActions:true})

@observer
class App extends React.Component {
  
  @observable selectedTheme="light-mode"
  
  @action.bound
  getcurrentTheme=()=>{
    return themeStore.selectedTheme;
  }
  
  onChangeTheme=(theme)=>{
    themeStore.setCurrentTheme(theme);
  }
  /*
  onChangeTheme=(theme)=>{
    if(this.getcurrentTheme()==='light-mode'){
      this.setCurrentTheme('dark-mode')
    }
    else{
      this.setCurrentTheme('light-mode')
    }
  }
  */
  
  render(){
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/counter-page">
            <CounterPage />
          </Route>
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
            <CountriesApp buttonText="light-mode" changeTheme={this.onChangeTheme} theme={this.selectedTheme} />
          </Route>
          <Route path="/countriesApp/" >
            <Details buttonText="light-mode" changeTheme={this.onChangeTheme} theme={this.selectedTheme}/>
          </Route>
          <Route path="/EmojiGame" children=<EmojiGame/>/>
          
          <Route path="/TodoMobx" children=<TodoApp/>/>
          
          <Route path="/EventMobx" children=<EventApp/>/>
          
          <Route path="/Example" children=<A/>/>
          
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
