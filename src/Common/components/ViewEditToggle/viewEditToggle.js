import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import tw from 'tailwind.macro'

import { withToggle } from '../../hocs/withToggle/withToggle.js'

const ViewEditToggleDiv = tw.div ``
const Header = tw.div ``
const Content = tw.div ``
const Button = tw.div ``
const Input = tw.input ``

@observer
class ViewEditToggle extends React.Component {

    @observable viewText = 'Click on the edit button to start editing'

    @action.bound
    handleChange(e) {
        this.viewText = e.target.value
    }

    render() {
        const { onToggle, toggleStatus } = this.props
        return (<ViewEditToggleDiv>
            <Header>ViewEditToggle</Header>
            <Content>
            {toggleStatus?<Input onChange={this.handleChange} defaultValue={this.viewText} />
                :<p>{this.viewText}</p>
            }
                <Button onClick={onToggle}>{toggleStatus?'Cancel':'Edit'}</Button>
            </Content>
        </ViewEditToggleDiv>)
    }
}

export default withToggle(ViewEditToggle)
