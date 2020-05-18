/*
import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
@observer
class Example extends React.Component {

    message = observable({
        title: "Foo",
        author: {
            name: "Michel"
        },
        likes: ["John", "sara"]


    })


    rendering = () => {

        this.message.title = "dinesh"
    }




    render() {

        console.log(this.message.title)


        return (
            <div>{this.rendering()}</div>)

    }


}


export default Example


*/


/*
import React from 'react'
import {observable} from 'mobx'
import {Provider,inject,observer} from 'mobx-react'

class A extends React.Component{
    render(){
        return(<Provider temp='Chanakya'>
            <B temp={'in b'} />
            </Provider>)
    }
}


@inject('temp')
@observer
class B extends React.Component{
    
    @observable name=""
    
    onChange=(event)=>{
        this.name=event.target.value
    }
    
    render(){
        console.log(temp)
        const{temp}=this.props
        return(<div>
        <input className='m-3 border-solid border-2 border-black' defaultValue={this.name} onChange={this.onChange}/>
        <C name={this.name}/>
        </div>)
    }
}


@inject('temp','name')
class C extends React.Component{
    render(){
        const {temp,name}=this.props
        console.log(name)
        return(<div>{temp} {name}</div>)
    }
}

export {A,B,C}
*/

//import { observable } from "mobx";
/*
const persons = observable(new Map());

const data = [{
        id: 1,
        name: "Sri Potti Sriramulu",
        city: "Nellore",
        state: "Andhra Pradesh",
    },
    {
        id: 2,
        name: "Pingali Venkayya",
        city: "Vijayawada",
        state: "Andhra Pradesh",
    },
    {
        id: 3,
        name: "Hanuma Vihari",
        city: "Kakinada",
        state: "Andhra Pradesh",
    },
];

data.forEach((person) => {
    persons.set(person.id, person);
});

//console.log(persons)
console.log(Array.from(persons.values()));
persons.clear();
console.log(persons);
*/
/*
import React from "react";
import { render } from "react-dom";
import { observer } from "mobx-react";
import { observable } from "mobx";

class ThemeStore {
  @observable selectedTheme = "dark";

  onChange() {
    console.log("onChange selectedTheme");
    if (this.selectedTheme === "dark") {
      this.selectedTheme = "light";
    } else {
      this.selectedTheme = "dark";
    }
  }
}

const themeStore = new ThemeStore();

@observer
class Example extends React.Component {


  onChange=()=> {
    const { onChange } = this.props.themeStore;
    onChange();
  }

  render() {
    const { selectedTheme } = this.props.themeStore;
    console.log("SelectedTheme:", selectedTheme);

    return <button onClick={this.onChange}>Change theme</button>;
  }
}
/*
render(
  <ThemeButton themeStore={themeStore} />,
  document.getElementById("root")
);
*/


import React from "react";
import { render } from "react-dom";

class ListItem extends React.Component {

    shouldComponentUpdate(nextProps) {
        console.log(nextProps, "next.props")
        //  console.log(this.props.value === nextProps.value, this.props.value, '===', nextProps.value)
        if (this.props.value === nextProps.value) {
            return false;
        }

        return true;
    }

    render() {
        console.log("new item");
        return <li>{this.props.value}</li>;
    }
}

class Example extends React.Component {
    constructor(props) {
        super(props);
        this.state = { numbers: [0, 10, 20, 30, 40, 50] };
    }
    renderListItems = () => {
        const { numbers } = this.state;
        return numbers.map((number, index) => (
            <ListItem key={index} value={number} />
        ));
    };

    addNumberToList = () => {
        const { numbers } = this.state;
        numbers[0] = 10
        this.setState({
            numbers: [...numbers, numbers.length * 10],
        });
    };

    render() {
        return (
            <div>
        <ul>{this.renderListItems()}</ul>
        <button onClick={this.addNumberToList}>Add number</button>
      </div>
        );
    }
}


export default Example
//render(<NumberList />, document.getElementById("root"));
/*
import { observable, values } from "mobx";

const persons = observable(new Map());

const data = [{
        id: 1,
        name: "Sri Potti Sriramulu",
        city: "Nellore",
        state: "Andhra Pradesh",
    },
    {
        id: 2,
        name: "Pingali Venkayya",
        city: "Vijayawada",
        state: "Andhra Pradesh",
    },
    {
        id: 3,
        name: "Hanuma Vihari",
        city: "Kakinada",
        state: "Andhra Pradesh",
    },
];

data.forEach((person) => {
    persons.set(person.id, person);
});

const cities1 = [];
for (const [key, value] of persons.entries()) {
    cities1.push(value.city);
}

const cities2 = Array.from(persons.values()).map((person) => person.city);

const cities3 = values(persons).map((person) => person.city);

console.log(cities1)
console.log(Array.from(persons.values()))
console.log(cities2)
console.log(values(persons))
console.log(cities3)
//const cities4 = persons.values().map((person) => person.city);
*/
