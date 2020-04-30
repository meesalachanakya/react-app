import {observable,action} from 'mobx'
import data from '../GridGamejsondata'
import Cell from '../models/Cell'


class GameStore {
    @observable level=0
    @observable toplevel=window.localStorage.toplevel===undefined?0:window.localStorage.toplevel
    @observable currentLevelGridCells=[]
    @observable selectedCells=[]
    @observable isGameCompleted=false
    @observable timerClearer
    @observable lifes
    //@observable timeLeft=(data[this.level].gridSize)*((data[this.level].gridSize)-1)
    
    constructor(){
        //console.log('yg')
        this.setGridCells()
    }
    
    
    @action.bound
    setGridCells(){
        if(!this.isGameCompleted){
        const totalCells=data[this.level].gridSize*data[this.level].gridSize;
        const hiddenCellCount=data[this.level].hiddenCellCount;
        for(let object=0;object<totalCells;object++){
            const cellObject={
                id:Math.random().toString(),
                isHidden:false
            };
            const cellModel=new Cell(cellObject);
            this.currentLevelGridCells.push(cellModel);
        }
        
        for (let i=0;i<hiddenCellCount;i++){
            this.currentLevelGridCells[i].isHidden=true;
        }
        
        let shuffledList=[];
        let list=this.currentLevelGridCells;
        while(list.length>0){
            const each=list[Math.floor(Math.random()*list.length)];
            let index=list.indexOf(each);
            shuffledList.push(each);
            list.splice(index,1);
        }
        //this.clickedCellIds=[];
        this.currentLevelGridCells=shuffledList;
        this.timer();
    }}
    
    @action.bound
    timer(){
        this.timerClearer=(setTimeout(()=>this.resetGame(),1000*(data[this.level].gridSize)*(data[this.level].gridSize)));
    }
    
    @action.bound
    clearTimer(){
        clearTimeout(this.timerClearer);
    }
    
    @action.bound
    goToNextLevelAndUpdateCells(){
        if(this.level===data.length-1){
            this.isGameCompleted=true;
        }
        else{
        this.level++;
        this.setGridCells();
        }
    }
    
    @action.bound
    resetSelectedCellsCount(){
        this.currentLevelGridCells=[];
        this.selectedCells=[];
    }
    
    @action.bound
    addSelectedCells(cellId){
        if(!this.selectedCells.find((each)=>each===cellId)){
        this.selectedCells.push(cellId);
        const hiddenCellCount=data[this.level].hiddenCellCount;
        if(hiddenCellCount===this.selectedCells.length){
            this.clearTimer();
            this.resetSelectedCellsCount();
            this.goToNextLevelAndUpdateCells();
            }
        }
    }
    
    @action.bound
    onPlayAgainClick(){
        this.resetGame();
    }
    
    @action.bound
    resetGame(){
        this.setTopLevel();
        this.level=0;
        this.isGameCompleted=false;
        this.resetSelectedCellsCount();
        this.setGridCells();
    }
    
    @action.bound
    setTopLevel(){
        if(this.level>this.toplevel){
            this.toplevel=this.level;
            window.localStorage.setItem('toplevel',this.toplevel)
        }
    }
}

const gameStore=new GameStore();

export default gameStore