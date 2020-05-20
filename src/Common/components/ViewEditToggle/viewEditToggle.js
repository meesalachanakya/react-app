import React from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import tw from 'tailwind.macro'

import { withToggle } from '../../hocs/withToggle/withToggle.js'

const ViewEditToggleDiv = tw.div `flex flex-col items-center bg-gray-400 w-full p-4`
const Header = tw.div `text-xl font-bold`
const Content = tw.div ` flex`
const Button = tw.div `bg-blue-500 text-white p-1 m-1 rounded-md`
const Input = tw.input `m-1`
const Text = tw.div `m-1`

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
                :<Text>{this.viewText}</Text>
            }
                <Button onClick={onToggle}>{toggleStatus?'Cancel':'Edit'}</Button>
            </Content>
        </ViewEditToggleDiv>)
    }
}

export default withToggle(ViewEditToggle)
