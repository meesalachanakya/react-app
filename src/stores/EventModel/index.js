import React from 'react'
import {action,observable}  from 'mobx'
import {observer} from 'mobx-react'



class EventModel{
@observable name=""
@observable location=""
id=""
constructor(modelObject){
    this.name=modelObject.name
    this.location=modelObject.Location
    this.id=modelObject.id
}
    
}

export default EventModel