import React from 'react'
import { observable, action } from 'mobx';
import { observer } from 'mobx-react'


function withToggle(WrappedComponent) {
    @observer
    class EnhancedComponent extends React.Component {
        @observable toggleStatus = false

        @action.bound
        onToggle() {
            this.toggleStatus = !this.toggleStatus
        }

        render() {
            return (<WrappedComponent toggleStatus={this.toggleStatus} onToggle={this.onToggle}  />)
        }
    }
    return EnhancedComponent
}

export { withToggle }
