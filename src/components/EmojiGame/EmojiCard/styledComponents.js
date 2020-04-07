import styled from '@emotion/styled'
import tw from 'tailwind.macro';

const Emoji=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:250px;
    border:solid-black;
    border-radius:5px;
    margin:10px;
    box-shadow:  0 3px 6px #999, 0 3px 6px #999;
    color:${props=>props.theme==='light-mode'?'black':'white'};
    ${props=>props.theme==='light-mode'?tw`bg-white`:tw`bg-blue-700`};
`

const EmojiName=tw.div`text-xl`

const Image=tw.div``

export {Emoji,EmojiName,Image}