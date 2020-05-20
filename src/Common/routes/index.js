import React from 'react'
import { Route } from 'react-router-dom'
//import PracticeAdvancedConceptsRoute from './PracticeAdvancedConceptsRoute'


class PracticeAdvancedConceptsRoute extends React.Component {
    render() {
        return (
            <Route path='/practice-advanced-concepts'>
                <PracticeAdvancedConcepts/>
            </Route>
        )
    }
}

export { PracticeAdvancedConceptsRoute }
