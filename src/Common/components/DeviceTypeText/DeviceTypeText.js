import React from 'react';
import tw from 'tailwind.macro';
import { withScreenSizeDectectors } from '../../hocs/withScreenSizeDetectors/withScreenSizeDetectors.js'


const DeviceTypeTextDiv = tw.div ``;
const Header = tw.div ``;
const Content = tw.div ``;

class DeviceTypeText extends React.Component {

    render() {
        const { screenSize } = this.props
        return (<DeviceTypeTextDiv>
            <Header>DeviceTypeText</Header>
            <Content>Device Type: {screenSize}</Content>
        </DeviceTypeTextDiv>);
    }
}

export default withScreenSizeDectectors(DeviceTypeText)
