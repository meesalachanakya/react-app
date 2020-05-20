// import React, { Component } from 'react';
// import { observable } from 'mobx'
// import { observer } from 'mobx-react'
// import tw from 'tailwind.macro';

// const RenderPropsUsage = tw.div ``;
// const Header = tw.div ``;
// const Content = tw.div ``;
// const Legand = tw.div ``;
// const MouseCoordinatesDiv = tw.div ``

// @observer
// class MouseCoordinates extends Component {

//     @observable mouseCoordinates = {
//         x: 0,
//         y: 0
//     }


//     handleMouseMove(event) {
//         this.mouseCoordinates.x = event.clientX
//         this.mouseCoordinates.y = event.clientY
//     }

//     render() {

//         samaj me anyi aari
//         kya karna

//         return (<div>
//             {this.props.render(this.mouseCoordinates)}
//             </div>

//         )
//     }
// }

// export default MouseCoordinates

import tw from 'tailwind.macro';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';

const Wrapper = tw.div ``;
@observer
class MouseCoordinates extends React.Component {
    @observable xCoordinates = 0;
    @observable yCoordinates = 0;

    @action.bound
    handleMouseMove(event) {
        this.xCoordinates = event.clientX;
        this.yCoordinates = event.clientY;
    }

    render() {
        const { xCoordinates, yCoordinates } = this;
        return (
            <Wrapper onMouseMove={this.handleMouseMove}>
          {this.props.render(xCoordinates,yCoordinates)}
        </Wrapper>
        );
    }
}
export default MouseCoordinates
