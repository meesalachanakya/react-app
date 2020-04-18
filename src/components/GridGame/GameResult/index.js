import React from 'react'
import Header from '../Header'
import {Button,Comment,Score,Result,ResultPage} from './styledComponents'

class GameResult extends React.Component{
    
    
    render(){
        const {theme,toplevel,level}=this.props
        return( <ResultPage>
                    <Header theme={theme}  changeTheme={this.props.changeTheme} topLevel={toplevel} level={level}/> 
                    <Result theme={theme}>
                        <Score>{level}</Score>
                        <Comment>Congratulation! You completed all the levels</Comment>
                        <Button onClick={this.props.playAgain}>Play Again</Button>
                    </Result>
                </ResultPage>)
    }
}

export default GameResult