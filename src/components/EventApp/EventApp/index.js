import React from 'react'
import {observable, action,computed,reaction} from 'mobx'
import {observer} from 'mobx-react'
import AddEvent from '../AddEvent'
import EventList from '../EventList'

@observer
class EventApp extends React.Component{
    
    
    render(){
        return(
            <div>
                <AddEvent/>
                <EventList/>
            </div>
            
            )
    }
}

export default EventApp