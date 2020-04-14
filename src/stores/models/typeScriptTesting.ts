//const fr:number=6
/*
type person={   
    firstName:string
    age:number
    lucky:Array<number>
    fun:number
     }


const A:person={
    firstName:'kjhk',
    age:098,
    lucky:[1,2,3],
    fun:fun()
}


function fun(){
    return 4
}
*/
/*
interface Address {
    line1: string
    line2: string
    city: string
    state: string
}

interface Person {
    firstName: string
    lastName: string
    age: number
    address: Address
}

let john: Person = {
    firstName:"John",
    lastName:"Doe",
    age:20,
    address: {
        line1: 'iB Tech Park',
        line2: 'near Chinnatekur Village',
        city: 'Kurnool',
        state: 'Andhra Pradesh'
    }
    };*/
    
  /*  
    import React, { Component } from 'react'

interface ButtonProps  {
    text: string
    onClick: () => void
    className: string
    disabled: boolean
}

class Button extends Component<ButtonProps> {
  render() {
    return  <div><div>text:'khmb'</div></div>;
  }
}*/

import React from 'react'

interface ButtonProps {
    text: string
    onClick: () => void
    className: string
    disabled: boolean
}

function Button(props: ButtonProps) {
    //const tex='kd'
}