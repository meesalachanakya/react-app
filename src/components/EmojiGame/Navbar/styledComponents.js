import tw from 'tailwind.macro';
import styled from '@emotion/styled'

const Header=styled.div`
    ${props=>console.log(props.theme)}
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:${props=>props.theme==='light-mode'?'black':'white'};
    ${props=>props.theme==='light-mode'?tw`bg-white`:tw`bg-gray-800`};    
`

const Name=tw.div`text-xl`

const ScoreDiv=tw.div`flex justify-between items-center`

const Score=tw.div`text-xl font-bold m-3`

const ThemeButton=tw.button`p-2 m-3 border-solid border-2 border-black `

export {Header,Name,ScoreDiv,Score,ThemeButton}