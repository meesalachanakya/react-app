import React from 'react'

import { Input } from './styledComponents.js';

class InputElement extends React.Component {
    render() {
        const { defaultValue, placeholder, type } = this.props
        return (
            <Input defaultValue={defaultValue} placeholder={placeholder} type={type} />
        )
    }
}

export default InputElement
