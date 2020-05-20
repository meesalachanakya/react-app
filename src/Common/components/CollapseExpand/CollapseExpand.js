import React from 'react'
import { observer } from 'mobx-react'
import tw from 'tailwind.macro'

import { withToggle } from '../../hocs/withToggle/withToggle.js'

const CollapseExpandDiv = tw.div ``
const Header = tw.div ``
const Content = tw.div ``
const Button = tw.div ``
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
