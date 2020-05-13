import React,{Component} from 'react'
import { API_INITIAL,API_FETCHING,API_SUCCESS,API_FAILED} from "@ib/api-constants";
import AuthStore from '.'
import AuthService from '../../services/AuthService/AuthAPI.js'
import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json'


describe('Testing AuthStore',()=>{
    let authAPI;
    let authStore;
    
    beforeEach(()=>{
        authAPI=new AuthService
        authStore=new AuthStore(authAPI)
    })
    
    it('test initialising auth store',()=>{
        expect(authStore.getUsersSignInAPIStatus).toBe(API_INITIAL)
        expect(authStore.getUsersSignInAPIError).toBe(null)
    })
    
    it('should test users SignInAPI fetching state',()=>{
        
        const mockLoadingPromise=new Promise(function(resolve,reject){})
        const mockSignInAPI=jest.fn()
        mockSignInAPI.mockReturnValue(mockLoadingPromise)
        authAPI.signInAPI=mockSignInAPI
        
        authStore.signInAPI()
        expect(authStore.getUsersSignInAPIStatus).toBe(API_FETCHING)
    })
    
    it('should test signInAPI success state',async()=>{
        
        const mockSuccessPromise=new Promise(function(resolve,reject){
            resolve(getUserSignInResponse)
        })
        const mockSignInAPI=jest.fn()
        mockSignInAPI.mockReturnValue(mockSuccessPromise)
        authAPI.signInAPI=mockSignInAPI
        
        await authStore.signInAPI()
        expect(authStore.getUsersSignInAPIStatus).toBe(API_SUCCESS)
    })
    
    it('should test signInAPI failure state',async()=>{
        
        const mockFailurePromise=new Promise(function(resolve,reject){
            reject(new Error('error'))
        }).catch(()=>{});
        const mockSignInAPI=jest.fn()
        mockSignInAPI.mockReturnValue(mockFailurePromise)
        authAPI.signInAPI=mockSignInAPI
        
        mockFailurePromise.catch(e=>{
            expect(authStore.getUsersSignInAPIStatus).toBe(API_FAILED)
            expect(authStore.getUsersSignInAPIError).toBe('error')
        })
    })
})