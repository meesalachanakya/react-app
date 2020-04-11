import React from 'react'
import {action}  from 'mobx'
import {observer} from 'mobx-react'

@observer
class Event extends React.Component{
    
    @action.bound
    onUpdateEventDetails(){
        
    }
    
    
}

export default Event