import {observable,action} from 'mobx'
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
import {setAccessToken,getAccessToken} from '../../utils/StorageUtils.js'

class AuthStore{
    @observable getUsersSignInAPIStatus
    @observable getUsersSignInAPIError
    @observable authAPIservice
    @observable accessToken=null
    
    
    constructor(authService){
    //  this.getUsersSignInAPIStatus=API_INITIAL
        this.getUsersSignInAPIError=null
        this.authAPIService=authService
    }
    
    @action.bound
    userSignIn(){
        
    }
    
    @action.bound
    setUsersSignInAPIResponse(response){
        //console.log(response[0].access_token)
        setAccessToken(response[0].access_token)
        this.accessToken=getAccessToken()
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
    
    @action.bound
    usersSignOut(){
        
    }
}

export default AuthStore