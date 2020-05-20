import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

const windowInnerWidth = window.innerWidth

function withScreenSizeDectectors(WrappedComponent) {
    @observer
    class EnhancedComponent extends React.Component {

        @observable screenSize = ''

        componentDidMount() {
            this.setScreenSize()
            window.addEventListener("resize", this.setScreenSize);
        }

        @action.bound
        setScreenSize() {
            const { isMobile, isTablet } = this
            this.screenSize = (isMobile()) ? "Mobile" : isTablet() ? "Tablet" : "Desktop"
        }

        isMobile = () => {
            return windowInnerWidth < 576 ? true : false
        }

        isTablet = () => {
            return windowInnerWidth < 992 ? true : false
        }

        isDesktop = () => {
            return windowInnerWidth >= 992 ? true : false
        }
        render() {
            return (
                <WrappedComponent 
                    screenSize={this.screenSize}
                    />)
        }

    }
    return EnhancedComponent
}

export { withScreenSizeDectectors }
