import React from 'react';
import tw from 'tailwind.macro';
import { withScreenSizeDectectors } from '../../hocs/withScreenSizeDetectors/withScreenSizeDetectors.js'


const DeviceTypeTextDiv = tw.div `flex flex-col items-center bg-gray-100 w-full p-4`;
const Header = tw.div `text-xl font-bold`
const Content = tw.div `flex m-1`

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
