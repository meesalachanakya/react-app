import React,{Component} from 'react'
import { render } from "@testing-library/react";

import SignInPage from '.'

describe('Signin Page',()=>{
    it('should render username',()=>{
        const username='test-user'
        const {getByPlaceholderText,debug}=render(
            <SignInPage username={username} onChangUserName={()=>{}} />
            )
            const usernameField=getByPlaceholderText("Username")
            expect(usernameField.value).toBe(username);
            //debug()
    })
    it('should render password',()=>{
        const password='test-password'
        const {getByPlaceholderText,debug}=render(
            <SignInPage password={password} onChangUserName={()=>{}} />
            )
            const passwordFiled=getByPlaceholderText("Password")
            expect(passwordFiled.value).toBe(password)
            //debug()
    })
    
    it('should render given error message',()=>{
        const {getByText}=render(<SignInPage errorMessage="Invalid username" />)
        getByText(/Invalid username/i);
    })
})