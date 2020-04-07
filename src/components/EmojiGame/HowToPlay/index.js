import React from 'react'
import {Foot,Heading,Instruction} from './styledComponents.js'

class HowToPlay extends React.Component{
    render(){
        return(
            
            <Foot>
                <Heading>How to play?</Heading>
                <Instruction>Get points by clicking on an image but don't click ono any image more than once!</Instruction>
            </Foot>
            )
    }
}

export default HowToPlay 