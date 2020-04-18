import React from 'react'
import styled from '@emotion/styled'
import tw from 'tailwind.macro'
import {observer} from 'mobx-react'
import Cell from '../Cell'
import gameStore from '../../../stores/GameStore'
import data from '../../../stores/GridGamejsondata'

const Grid=styled.div`
width:${props=>props.width}px;
justify-content:center;
`

@observer
class GameField extends React.Component{
    
    render(){
        const {theme}=this.props
        const width=data[gameStore.level].gridWidth
    const eachCell=gameStore.currentLevelGridCells.map((each)=>
                <Cell key={each.id} 
                        level={gameStore.level}    
                            addSelectedCells={gameStore.addSelectedCells}
                            clearTimer={gameStore.clearTimer}
                            restart={gameStore.resetGame}
                                currentGameStatus={this.currentGameStatus}
                                    theme={this.props.theme}
                                eachCell={each}/>)
    return(<Grid width={width} className="flex flex-wrap">{eachCell}</Grid>)
    }
}

export default GameField