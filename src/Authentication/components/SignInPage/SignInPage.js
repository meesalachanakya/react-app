import React from 'react';
//import { withRouter } from 'react-router-dom';
//import { API_FETCHING } from "@ib/api-constants";
import { inject, observer } from 'mobx-react';

import InputElement from '../../../Common/components/InputElement/InputElement.js'

import { Page, Head, SignInWindow, Submit, ErrorMsg } from './styledComponents.js';


@inject('authStore')
@observer
class SignInPage extends React.Component {
    //usernameRef = React.createRef();
    //passwordRef = React.createRef();

    //ref={this.passwordRef}
    //ref={this.usernameRef}

    render() {
        const { errorMessage, onChangePassword, onChangeUsername, onSubmitForm, username, password } = this.props;
        return (<Page>
        <SignInWindow onSubmit={onSubmitForm}>
        <Head>Sign in</Head>
        <InputElement   onChange={onChangeUsername} defaultValue={username} placeholder='Username' type='text'/>
        <InputElement   onChange={onChangePassword} defaultValue={password} placeholder='Password' type='password'/>
        <Submit  type='submit'>{this.props.authStore.getUsersSignInAPIStatus===100?'Signing in ...':'Sign in'}</Submit>
        <ErrorMsg>{errorMessage}</ErrorMsg>
        </SignInWindow>
        </Page >);
    }
}

export default SignInPage;
