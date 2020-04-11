import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import {CounterApp,Input,Button,H1,Counter} from './styledComponents.js'

import stores from '../../stores';
const counterStore = stores.counterStore;

@observer
class CounterPage extends Component {
  handleIncrement = () => {
    if(!isNaN(counterStore.count)){
    counterStore.incrementCounter();
    }
    else{
      counterStore.count=0
      counterStore.incrementCounter();
    }
  }

  handleDecrement = () => {
    if(!isNaN(counterStore.count)){
    counterStore.decrementCounter();
    }
    else{
      counterStore.count=0
      counterStore.decrementCounter();
    }
  }
  
  handleChange=(event)=>{
    const {value}=event.target
    counterStore.count=value
  }

  render() {
    return (
      <CounterApp>
        <H1>Counter</H1>
        <Counter>
        <Button onClick={this.handleIncrement}>+</Button>
        <Input type="number" value={counterStore.count}  onChange={this.handleChange} />
        {/*<h1>{counterStore.count}</h1>*/}
        <Button onClick={this.handleDecrement}>-</Button>
        </Counter>
      </CounterApp>
    );
  }
}

export default CounterPage;
