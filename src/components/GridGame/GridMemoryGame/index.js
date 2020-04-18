import React from 'react'
import {observer} from 'mobx-react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import Header  from '../Header'
import GameField from '../GameField'
import gameStore from '../../../stores/GameStore'
import themeStore from '../../../stores/ThemeStore'
import GameResult from '../GameResult'


const Game=styled.div`
        display:flex;
        flex-direction:column;
        align-items:center;
        min-height:100vh;
        min-width:100vw;
        background-color:light-gray;
        color:${props=>props.theme==='LIGHT'?'black':'white'};
    ${props=>props.theme==='LIGHT'?tw`bg-indigo-100`:tw`bg-gray-900`};
`

@observer
class GridMemoryGame extends React.Component{
    
    
    render(){
        if(gameStore.isGameCompleted){
            return(<div>
                <GameResult theme={themeStore.selectedTheme} 
                    changeTheme={themeStore.setCurrentTheme} 
                        toplevel={gameStore.toplevel} 
                            level={gameStore.level}
                                playAgain={gameStore.onPlayAgainClick}/>
           </div>)
        }
        else{
        return(<Game theme={themeStore.selectedTheme}>
                <Header theme={themeStore.selectedTheme}  changeTheme={themeStore.setCurrentTheme} topLevel={gameStore.toplevel} level={gameStore.level}/>
                <GameField theme={themeStore.selectedTheme}/>
                </Game>)
        }
    }
}

export default GridMemoryGame