import React from 'react';
import {observable, action,computed} from 'mobx';
import EventModel from  '../EventModel' 
import ModelObjectType from '../EventModel'

class EventStore{
    
    @observable Events=[]
    
    
    onAddEvent=(name,location)=>{
         const ModelObject={
             name:name,
             Location:location,
             id:Math.random().toString()
         }
        
        const eventModel=new EventModel(ModelObject)
        
        this.Events.push(eventModel)
    }
    
    onDeleteEvent=(id)=>{
        const filteredEvents=this.Events.filter((each)=>{if(each.id!==id){return each}})
        this.Events=filteredEvents
    }
    
    @computed
    get noOfEvents(){
        return this.Events.length
    }
}


const eventStore = new EventStore();

export {eventStore as default,EventStore}

