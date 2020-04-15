import React from 'react'
import styled from '@emotion/styled'
import Cell from '../Cell'
import gameStore from '../../../stores/GameStore'
import data from '../../../stores/GridGamejsondata'

const Grid=styled.div`
    width:(data[0].gridWidth)
    `


class GameField extends React.Component{
    render(){
        const width=(data[0].gridWidth)
    //console.log(gameStore.currentLevelGridCells)
    const eachCell=gameStore.currentLevelGridCells.map((each)=><Cell key={Math.random()} eachcell={each}/>)
    return(<Grid className={`grid-cols-3`}>{eachCell}</Grid>)
    }
}

export default GameField