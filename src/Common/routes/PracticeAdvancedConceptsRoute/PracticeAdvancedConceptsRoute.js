import React from 'react'

import ViewEditToggle from '../../components/ViewEditToggle/viewEditToggle.js'
import CollapseExpand from '../../components/CollapseExpand/CollapseExpand.js'
import DeviceTypeText from '../../components/DeviceTypeText/DeviceTypeText.js'
import DisplayMouseCoordinates from '../../components/DisplayMouseCoordinates/DisplayMouseCoorinates.js'

class PracticeAdvancedConceptsRoute extends React.Component {
    render() {
        return <div>
        HOC's Usage
          <ViewEditToggle/>
          <CollapseExpand/>
          <DeviceTypeText/>
        RENDER PROPS USAGE
          <DisplayMouseCoordinates/>
         </div>
    }
}

export default PracticeAdvancedConceptsRoute
