import React from 'react';
import {FiMoon} from 'react-icons/fi';
import tw from 'tailwind.macro';

const HeaderTag=tw.div`
    p-3 
    justify-between 
    items-center 
    flex 
    border-b-2 
    border-gray-300
    `

const Button=tw.button`
    flex
    flex-row
    items-center
    p-2
    text-xs
    border-solid border-2 border-white-200 
    rounded-md
`
const Heading=tw.p`
    font-bold
    text-3xl
`

class Header extends React.Component{
    render(){
        return(<HeaderTag>
            <Heading>Where in the world</Heading>
            <Button className={this.props.theme} onClick={this.props.changeTheme}><FiMoon /> {this.props.text}</Button>
        </HeaderTag>);
    }
}
export default Header;
