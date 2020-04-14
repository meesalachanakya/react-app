import { observable, action } from 'mobx'

class CounterStore {
   @observable count = 0

   //@action.bound
   incrementCounter() {
      if(!isNaN(parseInt(this.count))){
      this.count = parseInt(this.count) + 1}
      else{
         this.count=1
      }
   }

   //@action.bound
   decrementCounter() {
      if(!isNaN(parseInt(this.count))){
      this.count = parseInt(this.count) - 1
      }
      else{
         this.count=-1
      }
   }
}

export default CounterStore
