import React from 'react'
import { observeble } from 'mobx'
import { observer } from 'mobx-react'
//const lArrow="<"

class Pagination extends React.Component {
    render() {
        return (<Pagination>
                <GotoPreviousPage>&lt;</GotoPreviousPage>
                <CurrentPage></CurrentPage>
                <TotalPages></TotalPages>
                <GotoNextPage>&lt;</GotoNextPage>
            </Pagination>)
    }
}
