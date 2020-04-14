import React from 'react'
import Event from '../Event'
import {observer} from 'mobx-react'
import eventStore from '../../../stores/EventStore';

@observer
class EventList extends React.Component{
    
    render(){
        
        const eventDetails=eventStore.Events.map(each=><Event key={Math.random()} eventDetails={each}/>)
        return(
            <div className="flex flex-col items-center border-solid border-2 border-black m-3">
                <p>{eventStore.noOfEvents} Events</p>
                <div>
                {eventDetails}
                </div>
            </div>
            )
    }
}

export default EventList