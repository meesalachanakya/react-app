/*global fetch*/
import {action,observable} from 'mobx'
//import {API_INITIAL,API_FAILED,API_FETCHING,API_SUCCESS} from '@ib/api-constants'
import {bindPromiseWithOnSuccess} from '@ib/mobx-promise'
//import {create} from 'apisauce' 
//import {networkCallWithApisauce} from '../../utils/APIUtils.js'
//import {apiMethods} from '../../constants/APIConstants'
//import UserService from '../../Services/UserService/index.fixture'


class UsersStore{
    
    @observable getUsersApiStatus
    @observable getUsersApiError
    @observable users
    userService
    
    constructor(userService){
        this.init()
        this.userService=userService
        }
    
    @action
    init(){
        this.getUsersApiError=null
        //this.getUsersApiStatus=API_INITIAL
        this.users=[]
    }
    
    
    
    @action.bound
    setUsersAPIResponse(usersResponse){
        
        this.users=usersResponse.map((user)=>{
            return user.name
        })
        
        //this.getUsersApiStatus=API_SUCCESS
    }
    
    @action.bound
    setUsersAPIError(error){
        this.getUsersApiError=error
        //this.getUsersApiStatus=API_FAILED
    }
    
    @action.bound
    setUsersAPIStatus(apiStatus){
        //console.log(apiStatus)
        this.getUsersApiStatus=apiStatus
    }
    
    
    @action.bound
    getUsersAPI(){
         const usersPromise=this.userService.getUsersAPI()
        //const api=create({
        //    baseURL:'https://jsonplaceholder.typicode.com/'
        //})
        //const usersPromise=networkCallWithApisauce(api,'users/',{},apiMethods.get)
        return bindPromiseWithOnSuccess(usersPromise)
                .to(this.setUsersAPIStatus,this.setUsersAPIResponse)
                    .catch(this.setUsersAPIError)
    }
    
    @action
    clearStore(){
        this.init()
    }
}
//const userService=new UserService()
//const usersStore= new UsersStore(userService)

export default UsersStore