import {create} from 'apisauce'
import {URL} from '../../../Common/EnvironmentConstants/index.js'
import {signinEndPoint} from '../endPoints.js'
import {networkCallWithApisauce} from '../../utils/APIUtils.js'
import {apiMethods} from '../../constants/APIConstants'

class AuthService {
    api
    constructor(){
        this.api=create({baseURL:URL.BaseURL})
    }
    
    signInAPI(){
        return networkCallWithApisauce(this.api,signinEndPoint,{},apiMethods.get)
    }
}

export default AuthService