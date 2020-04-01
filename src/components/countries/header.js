import React from 'react';
import {FiMoon} from 'react-icons/fi';

class Header extends React.Component{
    render(){
        return(<div className="header">
            <h1>Where in the world</h1>
            <button className={this.props.theme} onClick={this.props.changeTheme}><FiMoon /> {this.props.text}</button>
        </div>);
    }
}
export default Header;
