import React from 'react'
import tw from 'tailwind.macro'


import MouseCoordinates from '../MouseCoordinates/MouseCoordinates.js'

const DisplayMouseCoordinatesDiv = tw.div ``
const Header = tw.div ``
const Content = tw.div ``

class DisplayMouseCoordinates extends React.Component {

    /*
    render() {
        return <MouseCoordinates render = {
        (xCoordinate, yCoordinate) => (
                <DisplayMouseCoordinatesDiv>
                <Header>DisplayMouseCoordinates</Header> 
                <Content>
                    The mouse position is({ xCoordinate.x }, { yCoordinate.y })
                </Content>
                </DisplayMouseCoordinatesDiv>)}
                />
    }*/


    render() {
        return <MouseCoordinates render={(x,y)=><DisplayMouseCoordinatesDiv>
            <Header>DisplayMouseCoordinates</Header>
            <Content>The mouse position is ({x}, {y}) </Content>
           </DisplayMouseCoordinatesDiv>}/>
    }
}

export default DisplayMouseCoordinates
