import React from 'react';
import {observable,action}  from 'mobx';
import {observer} from 'mobx-react';
import {withRouter,Redirect} from 'react-router-dom';
import {authStore} from '../../../Common/stores';
import {getAccessToken} from '../../utils/StorageUtils.js'

import {Page,Head,UserName,Password,SignInWindow,Submit,ErrorMsg} from './styledComponents.js'

@observer
class SignInPage extends React.Component{
    @observable username=''
    @observable password=''
    @observable errorMessage
    //@observable nextPage=false
    
    
    @action.bound
    onChangeUserName(event){
        this.username=event.target.value
    }
    
    @action.bound
    onChangePassword(event){
        this.password=event.target.value
    }
    
    @action.bound
    async onClickSignIn(){
        event.preventDefault();
        if((this.username.length!==0)&&(this.password.length!==0)){
          await  authStore.signInAPI()
            this.props.history.push('/ecommerce-store')
            this.errorMessage=''
        }
        else if(this.username.length===0){
            this.errorMessage='Enter UserName'
        }
        else if(this.password.length===0){
            this.errorMessage='Enter Password'
        }
        
    }
    
    
    render(){
        if(getAccessToken()){
            return (<Redirect to={{pathname:'/ecommerce-store'}}/>)
        }
        
        return(<Page>
        <SignInWindow onSubmit={this.onClickSignIn}>
        <Head>Sign in</Head>
        
        <UserName onChange={this.onChangeUserName} placeholder='UserName' type='text'/>
        <Password onChange={this.onChangePassword} placeholder='Password' type='password'/>
        <Submit type='submit'>Sign in</Submit>
        <ErrorMsg>{this.errorMessage}</ErrorMsg>
        </SignInWindow>
        </Page>)
    }
}

export default withRouter(SignInPage)
