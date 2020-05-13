import React from "react";
import {observable,action} from 'mobx';
import {observer,Provider} from 'mobx-react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Link} from 'react-router-dom'

import {ProtectedRoute} from './Common/ProtectedRoute'
import {CarsList} from './components/cars-app/index';
import {TodoListUpdates} from './components/Todo_List_app';
import {FormComponents} from './components/assignment-3/form-components';
import CountriesApp from './components/countries/CountriesApp';
import Details from './components/countries/details';
import EmojiGame from './components/EmojiGame/EmojiGame'
import TodoApp from './components/TodoMobx/TodoApp'
import EventApp from './components/EventApp/EventApp'
import Example from './components/Example'
import GridMemoryGame from './components/GridGame/GridMemoryGame'
import LoginPage from './components/LoginPage';
import SignInPageRoute from './Authentication/routes/SignInPageRoute'
import ProductsPage from './e-commerce/components/ProductsPage'
import './components/cars-app/index.css';
import './components/Todo_List_app/index.css';
import './components/countries/CountriesApp.css';
import Home from './components/home';
import CounterPage from './components/CounterPage'
import UsersPage from './components/UsersPage'
import stores from './stores'
//import themeStore from './stores/ThemeStore'



//configure ({enforceActions:true})

//@observer
class App extends React.Component {
  /*
  @observable selectedTheme="light-mode"
  
  @action.bound
  getcurrentTheme=()=>{
    return themeStore.selectedTheme;
  }
  
  onChangeTheme=(theme)=>{
    themeStore.setCurrentTheme();
  }
  */
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
    <Provider {...stores}>
    <Router>
    <div>
        
        <Switch>
          
          <ProtectedRoute path='/ecommerce-store' component={ProductsPage} />
        
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
            <CountriesApp buttonText="light-mode" /*changeTheme={this.onChangeTheme} theme={this.selectedTheme}*/ />
          </Route>
          <Route path="/countriesApp/" >
            <Details buttonText="light-mode"/* changeTheme={this.onChangeTheme} theme={this.selectedTheme}*//>
          </Route>
          <Route path="/EmojiGame">
            <EmojiGame/>
          </Route>
          <Route path="/TodoMobx">
            <TodoApp/>
          </Route>
          
          <Route path="/EventMobx">
          <EventApp/>
          </Route>
          
          <Route path="/GridMemoryGame">
            <GridMemoryGame/>
          </Route>
          <Route exact path='/users' component={UsersPage}  />
          
          <Route path='/example'>
            <Example/>
          </Route>
          
          <Route path='/signinPage'>
              <SignInPageRoute/>
          </Route>
      {/*
        <Route path='/ecommerce-store'>
              <ProductsPage/>
          </Route>
        */}
          <Route exact path="/">
            <Home />
          </Route>
                  
          {/*<Route path="/">
            <LoginPage/>
          </Route>*/}  
        </Switch>
      </div>
    </Router>
    </Provider>
  );
  }
}

export default App;
