import React from 'react'
import tw from 'tailwind.macro'


import MouseCoordinates from '../MouseCoordinates/MouseCoordinates.js'

const DisplayMouseCoordinatesDiv = tw.div `flex flex-col items-center bg-gray-100 p-4`;
const Header = tw.div `text-xl font-bold`
const Content = tw.div `flex m-1`

class DisplayMouseCoordinates extends React.Component {

    render() {
        return <MouseCoordinates render={(x,y)=>
            <DisplayMouseCoordinatesDiv>
                <Header>DisplayMouseCoordinates</Header>
                <Content>The mouse position is ({x}, {y}) </Content>
            </DisplayMouseCoordinatesDiv>}/>
    }
}

export default DisplayMouseCoordinates;