/*global expect*/
/*global jest*/
import React from 'react'
import {render,fireEvent,waitFor} from '@testing-library/react';
import {Router,Route,withRouter} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'mobx-react'
import AuthStore from '../../stores/AuthStore';
import AuthService from '../../services/AuthService/AuthAPI.js';
import SignInPagePath from '../../constants'
import getUsersSignInRespose from '../../fixtures/getUserSignInResponse.json'
import e_CommercePath from '../../../e-commerce/constants'

import SignInPageRoute from '.';

describe('SignInPageRoute testing',()=>{
    
    let authAPI;
    let authStore;
    
    const LocationDisplay = withRouter(({ location }) => (
        <div data-testid="location-display">{location.pathname}</div>
    ));
 
    beforeEach(()=>{
        authAPI=new AuthService;
        authStore=new AuthStore(authAPI);
    });
    
    afterEach(() => {
        jest.resetAllMocks();
    });
    
    it('should render username empty errorMessage',()=>{
        const {getByText,getByRole}=render(
            <Router history={createMemoryHistory()}>
                <SignInPageRoute  authStore={authStore}/>
            </Router>
        );
        const signInButton=getByRole('button',{name:'Sign in'});
        
        fireEvent.click(signInButton);
        getByText(/Please enter username/i);
    });
    
    it('should render password empty errorMessage',()=>{
        const {getByRole,getByText,getByPlaceholderText}=render(
            <Router history={createMemoryHistory()}>
                <SignInPageRoute  authStore={authStore}/>
            </Router>
            );
        const username='test-user';
        const usernameField=getByPlaceholderText('Username');
        const signInButton=getByRole('button',{name:'Sign in'});
        
        fireEvent.change(usernameField,{target:{value:username}});
        fireEvent.click(signInButton);
        getByText(/Please enter password/i);
    });
    
    it('should submit onclick sign-in',()=>{
        const {getByPlaceholderText,getByRole}=render(
            <Router history={createMemoryHistory()}>
                <SignInPageRoute  authStore={authStore}/>
            </Router>
            );
        const username='test-user';
        const password='test-password';
        
        const usernameField=getByPlaceholderText('Username');
        const passwordField=getByPlaceholderText('Password');
        const signInButton=getByRole('button',{name:'Sign in'});
        
        fireEvent.change(usernameField,{target:{value:username}});
        fireEvent.change(passwordField,{target:{value:password}});
        fireEvent.click(signInButton);
        
        getByRole('button',{name:/Signing in/i})
    });
    
    it('should render signInRoute Success ',async()=>{
        const history=createMemoryHistory();
        const route=e_CommercePath;
        history.push(route);
        
        const {getByTestId,queryByRole,getByPlaceholderText,getByRole}=render(
            <Provider authStore={authStore}>
                <Router history={createMemoryHistory()}>
                    <Route path={SignInPagePath}>
                        <SignInPageRoute/>
                    </Route>
                    <Route path={e_CommercePath}>
                        <LocationDisplay/>
                    </Route>
                </Router>
            </Provider>
        );
        
        const username='test-user';
        const password='test-password';
        
        
        const usernameField=getByPlaceholderText('Username');
        const passwordField=getByPlaceholderText('Password');
        const signInButton=getByRole('button',{name:'Signing in ...'});
        
        const mockSuccessPromise=new Promise(function(resolve,reject){
            resolve(getUsersSignInRespose);
        });
        
        const mockSignInAPI=jest.fn();
        mockSignInAPI.mockReturnValue(mockSuccessPromise);
        authAPI.signInAPI=mockSignInAPI;
        await authStore.userSignIn()
        
        fireEvent.change(usernameField,{target:{value:username}});
        fireEvent.change(passwordField,{target:{value:password}});
        fireEvent.click(signInButton);
        history.push('/ecommerce-store')
       
        expect(queryByRole('button',{name:'Sign in'})).not.toBeInTheDocument()
        //expect(getByTestId('location-display')).toHaveTextContent(e_CommercePath)
    });
})