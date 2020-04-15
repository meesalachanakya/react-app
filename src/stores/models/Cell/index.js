import {observable} from 'mobx'

class Cell {
    id
    @observable isHidden
    
    constructor(cellObject){
        this.id=cellObject.id
        this.isHidden=cellObject.isHidden
    }
}

export default Cell