import React from 'react'
import Header  from '../Header'
import GameField from '../GameField'
import gameStore from '../../../stores/GameStore'


class GridMemoryGame extends React.Component{
    
    constructor(){
        super()
        gameStore.setGridCells()   
    }
    
    render(){
        return(<div>
                <Header/>
                <GameField/>
                </div>)
    }
}

export default GridMemoryGame