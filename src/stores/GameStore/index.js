import {observable,action} from 'mobx'
import data from '../GridGamejsondata'
import Cell from '../models/Cell'

class GameStore {
    @observable level=0
    @observable toplevel=0
    @observable currentLevelGridCells=[]
    @observable selectedCellsCount=0
    @observable isGameCompleted=false
    
    @action.bound
    onCellClick(){
        
    }
    
    @action.bound
    setGridCells(){
        const totalCells=data[this.level].gridSize*data[this.level].gridSize
        //console.log(totalCells)
        for(let object=0;object<totalCells;object++){
            const cellObject={
                id:Math.random().toString(),
                isHidden:false
            }
            const cellModel=new Cell(cellObject)
            this.currentLevelGridCells.push(cellModel)
        }
        //console.log(this.currentLevelGridCells)
    }
    
    @action.bound
    goToNextLevelAndUpdateCells(){
        
    }
    
    @action.bound
    resetSelectedCellsCount(){
        
    }
    
    @action.bound
    incrementSelecteddCellsCount(){
        
    }
    
    @action.bound
    onPlayAgainClick(){
        
    }
    
    @action.bound
    resetGame(){
        
    }
    
    @action.bound
    setTopLevel(){
        
    }
}

const gameStore=new GameStore()

export default gameStore