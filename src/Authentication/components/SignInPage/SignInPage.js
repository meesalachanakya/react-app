import React from 'react';
import { withRouter } from 'react-router-dom';
import { API_FETCHING } from "@ib/api-constants";
import { inject, observer } from 'mobx-react';
//import { authStore } from '../../../Common/stores';

import { Page, Head, UserName, Password, SignInWindow, Submit, ErrorMsg } from './styledComponents.js';

@inject('authStore')
@observer
class SignInPage extends React.Component {
    usernameRef = React.createRef();
    componentDidMount() {
        this.usernameRef.current.focus()
    }

    render() {
        const { errorMessage, onChangePassword, onChangeUsername, onSubmitForm, username, password } = this.props;
        //console.log(username)
        //console.log(authStore.getUsersSignInAPIStatus===100)
        return (<Page>
        <SignInWindow onSubmit={onSubmitForm}>
        <Head>Sign in</Head>
        <UserName ref={this.usernameRef} onChange={onChangeUsername} defaultValue={username} placeholder='Username' type='text'/>
        <Password onChange={onChangePassword} defaultValue={password} placeholder='Password' type='password'/>
        <Submit  type='submit'>{this.props.authStore.getUsersSignInAPIStatus===100?'Signing in ...':'Sign in'}</Submit>
        <ErrorMsg>{errorMessage}</ErrorMsg>
        </SignInWindow>
        </Page >)
    }
}

export default SignInPage;
