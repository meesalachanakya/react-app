import React from 'react'
import {observable, action,reaction} from 'mobx'
import eventStore from '../../../stores/EventStore';


class AddEvent extends React.Component{
    @observable eventName:string=''
    @observable eventLocation:string=''
    
    
    @action.bound
    onAddEvent(){
        eventStore.onAddEvent(this.eventName,this.eventLocation)
        this.eventName=''
        this.eventLocation=''
    }
    
    @action.bound
    onChangeEventName(event){
        this.eventName=event.target.value
    }
    
    @action.bound
    onChangeEventLocation(event){
        this.eventLocation=event.target.value
    }
    
    render(){
        return(
            <div className="flex border-solid border-2 border-black m-3">
                <div className="flex flex-col">
                    <input className='m-3 border-solid border-2 border-black' value={this.eventName} onChange={this.onChangeEventName} placeholder="Event Name"/>
                    <input className='m-3 border-solid border-2 border-black' value={this.eventLocation} onChange={this.onChangeEventLocation} placeholder="Event Location"/>
                </div>
                <button  className='border-solid border-2 border-black m-10' onClick={this.onAddEvent}>Add Event</button>
            </div>
        )
    }
}

export default AddEvent