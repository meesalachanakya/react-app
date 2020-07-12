import { withRouter } from 'react-router-dom'
import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import SignInPage from '../../components/SignInPage'

@inject('authStore')
@observer
class SignInPageRoute extends React.Component {
  //usernameRef = React.createRef();
  //passwordRef = React.createRef();
  //formRef = React.createRef()
  @observable username = ''
  @observable password = ''
  @observable errorMessage = ''

  //componentDidMount() {
  //  this.formRef.current.usernameRef.current.focus()
  //}

  @action.bound
  onChangeUsername(e) {
    this.username = e.target.value;
  }

  @action.bound
  onChangePassword(e) {
    this.password = e.target.value;
  }

  onSubmitForm = async(e) => {
    e.preventDefault();
    if (this.username === "" || this.username === undefined) {
      this.errorMessage = "Please enter username";
      //this.formRef.current.usernameRef.current.focus()
      //this.usernameRef.current.focus()
    }
    else if (this.password === "" || this.password === undefined) {
      this.errorMessage = "Please enter password";
      //this.passwordRef.current.focus()
      //this.formRef.current.passwordRef.current.focus()
    }
    else {
      this.errorMessage = "";
      await this.props.authStore.userSignIn();
      this.props.history.push('/ecommerce-store/products');
    }
  };


  render() {
    return (<SignInPage
      username = { this.username } 
      password = { this.password } 
      errorMessage = { this.errorMessage } 
      onChangeUsername = { this.onChangeUsername } 
      onChangePassword = { this.onChangePassword } 
      onSubmitForm = { this.onSubmitForm } 
      onEnterKeyPress = { this.onEnterKeyPress }
      //ref={this.formRef}
      //usernameRef={this.usernameRef}
      //passwordRef={this.passwordRef}
      />);
  }
}

export default withRouter(SignInPageRoute);
