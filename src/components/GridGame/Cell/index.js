import React from 'react'
import {observable,action} from 'mobx'
import {observer} from 'mobx-react'
import data from '../../../stores/GridGamejsondata'
import {CellDiv} from './styledComponents'


@observer
class Cell extends React.Component{
    
    @observable showHiddenCells=true
    @observable clickedWrongCell=false
    
    @action.bound
    onCellClick(event){
    const {id,isHidden}=this.props.eachCell;
    if(this.showHiddenCells===false&&this.clickedWrongCell===false){
        if(isHidden){
            this.showHiddenCells=true;
            setTimeout(()=>this.props.addSelectedCells(this.props.eachCell.id),200);
        }
        else {
            this.clickedWrongCell=true;
            setTimeout(()=>this.props.restart(),200);
            this.props.clearTimer();
        }
       }
    }
    
    componentDidMount(){
        setTimeout(()=>{this.showHiddenCells=false},1000*(data[this.props.level].gridSize));
     }
    
    render(){
        const {theme,level}=this.props;
        const {isHidden}=this.props.eachCell;
        const cellHeightWidth=data[level].gridWidth/data[level].gridSize-10;
        
        return(<div>
        {this.showHiddenCells && isHidden?
        (<CellDiv cellHeightWidth={cellHeightWidth}
                        onClick={this.onCellClick}
                            cellColor={theme==='LIGHT'?'#42a671':'#4ecbc0'}></CellDiv>)
    
                :(<CellDiv cellHeightWidth={cellHeightWidth} 
                        onClick={this.onCellClick}
                            cellColor={theme==='LIGHT'?(this.clickedWrongCell?'#e53e3e':'#4a5568')
                                                        :(this.clickedWrongCell?'#e53e3e':'#2a4362')}
                            ></CellDiv>)}
    </div>)}
}

export default Cell;























/*
import React from 'react'
import {observable,action} from 'mobx'
import {observer} from 'mobx-react'
import styled from '@emotion/styled'
import data from '../../../stores/GridGamejsondata'

const CellDiv=styled.div`
background-color:${props=>props.cellColor};
height:${props=>props.cellHeightWidth}px;
width:${props=>props.cellHeightWidth}px;
display:flex;
margin:3px;
`
@observer
class Cell extends React.Component{
    
    @observable isClickedOnCell
    @observable cellColor=this.props.theme==='LIGHT'?'#4a5568':'#2a4362'
    
    @action.bound
    onCellClick(event){
        const {isHidden}=this.props.eachCell
        if(isHidden){
            this.cellColor=this.props.theme==='LIGHT'?'#42a671':'#4ecbc0'
            this.props.incrementSelectedCellsCount()
        }
        else {
            this.cellColor='#e53e3e'
            setTimeout(()=>this.props.restart(),200)
            this.props.clearTimer()
        }
    }
    
    componentDidMount(){
        //const {isHidden}=this.props.eachCell
        //if(isHidden){
        console.log('bug')
        //this.cellColor=this.props.theme==='LIGHT'?'#42a671':'#4ecbc0'
        setTimeout(()=>{this.cellColor=(this.props.theme==='LIGHT')?'#4a5568':'#2a4362'},1000*(data[this.props.level].gridSize))
        //}
     }
    
    render(){
        const {isHidden}=this.props.eachCell
        const cellHeightWidth=data[this.props.level].gridWidth/data[this.props.level].gridSize-10
        
        
        return(<CellDiv cellHeightWidth={cellHeightWidth}  cellColor={this.cellColor} onClick={this.onCellClick} ></CellDiv>)
    }
}

export default Cell
*/