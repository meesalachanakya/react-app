import React from 'react'
import {inject,observer} from 'mobx-react'
import NoDataView from '../common/NoDataView'
import LoadingWrapperWithFailure from  '../common/LoadingWrapperWithFailure'


@inject('usersStore')
@observer
class UsersPage extends React.Component{
    
    componentDidMount(){
        this.doNetworkCalls()
    }
    
    doNetworkCalls=()=>{
        this.props.usersStore.getUsersAPI();
    }
    
    renderUsersList=()=>{
        const {users}=this.props.usersStore;
        if(users.length==0){
            return <NoDataView/>;
        }
        else{
        return users.map(userName=> (
                   <div>{userName}</div>
            ));
        }
    }    
    
    render(){
        const {getUsersApiStatus,getUsersApiError}=this.props.usersStore
        return (
        <LoadingWrapperWithFailure
            apiStatus={getUsersApiStatus}
            apiError={getUsersApiError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderUsersList}
        />)
    }
}

export default UsersPage