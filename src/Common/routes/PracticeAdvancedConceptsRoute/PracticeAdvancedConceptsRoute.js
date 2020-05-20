import React from 'react'
import tw from 'tailwind.macro'

const PracticeAdvancedConceptsRouteDiv = tw.div `flex flex-col items-center w-full`
const Heading = tw.div `text-2xl font-bold m-2`

import ViewEditToggle from '../../components/ViewEditToggle/viewEditToggle.js'
import CollapseExpand from '../../components/CollapseExpand/CollapseExpand.js'
import DeviceTypeText from '../../components/DeviceTypeText/DeviceTypeText.js'
import DisplayMouseCoordinates from '../../components/DisplayMouseCoordinates/DisplayMouseCoorinates.js'

class PracticeAdvancedConceptsRoute extends React.Component {
    render() {
        return <PracticeAdvancedConceptsRouteDiv>
        <Heading>HOC's Usage</Heading>
          <ViewEditToggle/>
          <CollapseExpand/>
          <DeviceTypeText/>
        <Heading>RENDER PROPS USAGE</Heading>
          <DisplayMouseCoordinates/>
         </PracticeAdvancedConceptsRouteDiv>
    }
}

export default PracticeAdvancedConceptsRoute
