import {observable,action} from 'mobx'
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import { API_INITIAL } from "@ib/api-constants";
import {setAccessToken,getAccessToken} from '../../utils/StorageUtils.js'

class AuthStore{
    @observable getUsersSignInAPIStatus
    @observable getUsersSignInAPIError
    @observable authAPIservice
    @observable accessToken=null
    
    
    constructor(authService){
        this.getUsersSignInAPIStatus=API_INITIAL
        this.getUsersSignInAPIError=null
        this.authAPIService=authService
    }
    
    @action.bound
    userSignIn(){
        return this.signInAPI()
    }
    
    @action.bound
    setUsersSignInAPIResponse(response){
        setAccessToken(response[0].access_token)
    }
    
    @action.bound
    setGetUsersSignInAPIError(error){
        this.getUsersSignInAPIError=error
    }
    
    @action.bound
    setGetUsersSignInAPIStatus(apiStatus){
        this.getUsersSignInAPIStatus=apiStatus
    }
    
    @action.bound
    signInAPI(){
        const authPromise=this.authAPIService.signInAPI()
        
        return bindPromiseWithOnSuccess(authPromise)
                .to(this.setGetUsersSignInAPIStatus,this.setUsersSignInAPIResponse)
                    .catch(this.setGetUsersSignInAPIError)
        
    }
    
  //  @action.bound
//    usersSignOut(){
        
  //  }
}

export default AuthStore