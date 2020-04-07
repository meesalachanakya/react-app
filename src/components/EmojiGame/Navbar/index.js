import React from 'react'
import {Header,Name,ScoreDiv,Score,ThemeButton} from './styledComponents.js'

class Navbar extends React.Component{

 
 render(){
     return(
         <Header theme={this.props.theme}>
            <Name>Emoji Game</Name>
            <ScoreDiv>
                <Score>Score:{this.props.score}</Score>
                <Score>Top Score:{this.props.topScore}</Score>
                <ThemeButton onClick={this.props.onClickHandle}>LIGHT THEME</ThemeButton>
            </ScoreDiv>
         </Header>
        );
 }   
}

export default Navbar