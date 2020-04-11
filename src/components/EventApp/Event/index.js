import React from 'react'
import {observable, action,computed,reaction} from 'mobx'
import {observer} from 'mobx-react'
import eventStore from '../../../stores/EventStore';

@observer
class Event extends React.Component{
    @observable isEditEvent=false
    @observable eventName
    @observable eventLocation
    
    
    @action.bound
    onChangeEventName(event){
        this.props.eventDetails.eventName=event.target.value
    }
    
    @action.bound
    onChangeEventLocation(event){
        this.props.eventDetails.eventLocation=event.target.value
    }
    
    @action.bound
    onEditEventDetails(){
        this.isEditEvent=true
    }
    
    @action.bound
    onUpdateEventDetails(){
        this.isEditEvent=false
    }
    
    @action.bound
    onDeleteEvent(){
        eventStore.onDeleteEvent(this.props.eventDetails.id)
    }
    
    render(){
        const {eventName}=this.porps.eventDetails
        const {eventLocation}=this.props.eventDetails
        
        if(this.isEditEvent===false){
        return(<div className="flex border-solid border-2 border-black m-3">
                <div className="flex flex-col">
                <p className='m-3'>{eventName}</p>
                <p className='m-3'>{eventLocation}</p>
                </div>
                <div className="flex flex-col">
                    <button  className='border-solid border-2 border-black m-3' onClick={this.onEditEventDetails}>Edit</button>
                    <button  className='border-solid border-2 border-black m-3' onClick={this.onDeleteEvent}>Delete</button>
                </div>
                </div>
                );}
        else{
            return(
            <div className="flex border-solid border-2 border-black m-3">
                <div className="flex flex-col">
                    <input className='m-3 border-solid border-2 border-black ' defaultValue={eventName} onChange={this.onChangeEventName} placeholder="Event Name"/>
                    <input className='m-3 border-solid border-2 border-black ' defaultValue={eventLocation} onChange={this.onChangeEventLocation} placeholder="Event Location"/>
                </div>
                <button  className='border-solid border-2 border-black m-10' onClick={this.onUpdateEventDetails}>Update Event</button>
            </div>) 
        }
    }
}

export default Event