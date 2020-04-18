import React from 'react'
import {observer} from 'mobx-react'
import {action} from 'mobx'
import data from '../../../stores/GridGamejsondata'
import {ThemeButton,Score,Head,Container,TimeLeft} from './styledComponents'

@observer
class Header extends React.Component{
    
    
    
    @action.bound
    changeTheme(){
        this.props.changeTheme()
    }
    
    
    
    
    render(){
        const {level,theme,topLevel}=this.props
        const width=data[level].gridWidth
        return(
            <Head theme={theme}>
        <Container width={width}>
            <Score className='flex justify-center'>Top level:{topLevel}</Score>
            <div className='flex flex-row justify-around'>
                <Score>Score:{level}</Score>
                <TimeLeft></TimeLeft>
                <ThemeButton theme={theme} onClick={this.changeTheme} >{theme} MODE</ThemeButton>
            </div>
        </Container>
        </Head>)
    }
}

export default Header