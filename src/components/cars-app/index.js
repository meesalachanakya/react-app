import React from "react";
class Car extends React.Component{
    constructor(props){
        super(props);
        this.state={
          Status:"stopped",
          speed:0,
        };
    }
    
    onStartOrStop=()=>{
        if(this.state.Status==="stopped"){
          this.setState({Status:"running"});
        }
        else{
          this.setState({Status:"stopped"});
        }
    }
    
    displayStartStop=()=>{
      if(this.state.Status==="stopped"){
        return 'start';
      }
      else{
        return "stop";
      }
    }
    
    onAccelerate=()=>{
        let initial=this.state.speed;
        initial+=10;
        this.setState({speed:initial});
    }
    
    onApplyBrake=()=>{
      let initial=this.state.speed;
        initial-=10;
        if(initial>=0){
          this.setState({speed:initial});
        }
    }
    
    displayStatusText=()=>{
      if(this.state.Status==='stopped'){
        this.state.speed=0;
        return <p>Status:stopped</p>;
      }  
      else{ 
        if(this.state.speed!==0){
          return <p>Status:running at {this.state.speed} kmph</p>;
        }
        else{
          return <p>Status:running</p>;
        }
      }
    }
    
    render(){
      return(
        <div className="car">
        <div className="car-number-remove">
          <div className="car-id">Car-{this.props.id}</div>
          <div className="car-remove" onClick={()=>this.props.remove(this.props.id)}>❌</div>
        </div>
        <div className="start-stop-button">
          <button onClick={this.onStartOrStop} id="startStopButton">{this.displayStartStop()}</button>
        </div>
        <div className="status">
          {this.displayStatusText()}
        </div>
        <div className="accelerator-brake">
          <div>
            <button onClick={this.onAccelerate} disabled={this.state.Status==="stopped"} className="accelerator-button">accelerator</button>
         </div>
          <div>
            <button onClick={this.onApplyBrake} className="break-button">Apply break</button>
          </div>
        </div>
      </div>
        );
    }
}


class CarsList extends React.Component{
    constructor(props){
    super(props);
      this.state={
        carsList:[1]
      };
    }
    
    addCarToCarsList=()=>{
      //alert(this.state.carsList)
     // alert(this.state.carsList.slice(0))
      let nextcar=this.state.carsList;
      nextcar.push(parseInt(this.state.carsList.slice(-1))+1);
      this.setState({carsList:nextcar});
    }
     
    removeCarFromCarsList=(id)=>{
      this.setState({carsList:this.state.carsList.filter(each=>id!==each)});
    }
    
    render(){
      return(
        <div className="add-car">
          <button className="addCarButton" onClick={this.addCarToCarsList}>Add car</button>
          <div>{this.state.carsList.map(each=> <Car id={each} remove={this.removeCarFromCarsList}/>)}</div>
        </div>
        );
     }
}
//ReactDOM.render(<CarsList />,document.getElementById('root'));

export {Car,CarsList}; 
