import React from 'react';
import {observable, action,computed,reaction} from 'mobx';


class EventStore extends React.Component{
    
    @observable Events=[]
    
    @action.bound
    onAddEvent(name,location){
        this.Events.push({id:Math.random(),eventName:name,eventLocation:location})
    }
    
    onDeleteEvent(id){
        const filteredEvents=this.Events.filter((each)=>{if(each.id!==id){return each}})
        this.Events=filteredEvents
    }
    
    @computed
    get noOfEvents(){
        return this.Events.length
    }
    
}

const eventStore=new EventStore()

export default eventStore