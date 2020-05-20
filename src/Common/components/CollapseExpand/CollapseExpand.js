import React from 'react'
import { observer } from 'mobx-react'
import tw from 'tailwind.macro'

import { withToggle } from '../../hocs/withToggle/withToggle.js'

const CollapseExpandDiv = tw.div `flex flex-col items-center bg-gray-500 w-full p-4`
const Header = tw.div `text-xl font-bold`
const Content = tw.div `flex m-1`
const Button = tw.div `bg-blue-500 text-white p-1 m-1 rounded-md`
const Expand = tw.div ``
const List = tw.div ``

class CollapseExpand extends React.Component {


    render() {
        const { toggleStatus, onToggle } = this.props
        return (<CollapseExpandDiv>
            <Header>CollapseExpand</Header>
            <Content>Sample Shopping List:
            {!toggleStatus?<Button onClick={onToggle}>Expand</Button>
                :<Expand>
                    <Button onClick={onToggle}>Collapse</Button>
                        <List>Eggs</List>
                        <List>Bread</List>
                </Expand>}
            </Content>
        </CollapseExpandDiv>)
    }
}

export default withToggle(CollapseExpand)
