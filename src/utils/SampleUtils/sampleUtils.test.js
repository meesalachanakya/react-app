

import {HelloMessage} from './'
import React,{Component} from 'react'

//describe('add tests',()=>{
  //  it('should return sum of two numbers',()=>(
    //   expect(add(1,2)).toBe(3))
    
    //)
    //it('should return null for strings',()=>())
    
//})

import {render} from '@testing-library/react'

describe('function Returing World text ',()=>{
    it('should render',()=>   {
    const {getByText,debug}=render(<HelloMessage message="World"/>)
    getByText(/World/i);
    
   // debug()
    //console.log("4")
})})