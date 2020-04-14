import React from 'react'
import {action,observable}  from 'mobx'
import {observer} from 'mobx-react'

export type ModelObjectType={
name:string
Location:string
id:string
}


class EventModel{
@observable name:string=""
@observable location:string=""
id:string=""
constructor(modelObject:ModelObjectType){
    this.name=modelObject.name
    this.location=modelObject.Location
    this.id=modelObject.id
}
    
}

export default EventModel