import React from 'react'
import {observable, action} from 'mobx'
import {observer} from 'mobx-react'
import eventStore from '../../../stores/EventStore';
import EventModel from '../../../stores/EventModel'


@observer
class Event extends React.Component{
    @observable isEditEvent=false
    @observable eventName
    @observable eventLocation
    
    
    @action.bound
    onChangeEventName(event){
        this.props.eventDetails.name=event.target.value
    }
    
    @action.bound
    onChangeEventLocation(event){
        this.props.eventDetails.location=event.target.value
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
        const {name}=this.props.eventDetails
        const {location}=this.props.eventDetails
        
        if(this.isEditEvent===false){
        return(<div className="flex border-solid border-2 border-black m-3">
                <div className="flex flex-col">
                <p className='m-3'>{name}</p>
                <p className='m-3'>{location}</p>
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
                    <input className='m-3 border-solid border-2 border-black ' defaultValue={name} onChange={this.onChangeEventName} placeholder="Event Name"/>
                    <input className='m-3 border-solid border-2 border-black ' defaultValue={location} onChange={this.onChangeEventLocation} placeholder="Event Location"/>
                </div>
                <button  className='border-solid border-2 border-black m-10' onClick={this.onUpdateEventDetails}>Update Event</button>
            </div>) 
        }
    }
}

export default Event