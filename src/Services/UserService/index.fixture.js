import {create} from 'apisauce'
import {networkCallWithApisauce} from '../../utils/APIUtils.js'
import {apiMethods} from '../../constants/APIConstants'
import usersResponse from '../../Fixtures/getUsersResponse.json'

class UserFixtureService{
    
    getUsersAPI(){
        return new Promise((resolve,reject)=>{resolve(usersResponse)});
    }
}

export default UserFixtureService;