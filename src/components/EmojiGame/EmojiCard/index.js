import React from 'react'
import {Emoji,EmojiName,Image} from './styledComponents.js'


class EmojiCard extends React.Component{
    
    onEmojiClick=(event)=>{
        this.props.onTouch(this.props.emoji)
    }
    render(){
        //console.log(this.props.emoji.name,'ggg')
        return(
        <Emoji onClick={this.onEmojiClick} theme={this.props.theme}>
            <Image><img src={this.props.emoji.image}  alt={`${this.props.emoji.name}`}/></Image>
            <EmojiName>{this.props.emoji.name}</EmojiName>
        </Emoji>
        )
    }
}

export default EmojiCard