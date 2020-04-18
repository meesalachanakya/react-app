import styled from '@emotion/styled'
import tw from 'tailwind.macro'


const ThemeButton=styled.button`${tw`p-2 m-3 `}
    color:${props=>props.theme==='LIGHT'?'black':'white'};
    ${props=>props.theme==='LIGHT'?tw`bg-indigo-100`:tw`bg-gray-900`};
    border:1px solid ${props=>props.theme==='LIGHT'?'black':'white'};
    border-radius:3px;
`
const TimeLeft=styled.div``

const Score=styled.div`${tw`text-2xl font-bold m-3`}`

const Head=styled.div`${tw`w-screen flex justify-center`}
color:${props=>props.theme==='LIGHT'?'black':'white'};
    ${props=>props.theme==='LIGHT'?tw`bg-indigo-100`:tw`bg-gray-900`};
`

const Container=styled.div`display:flex; flex-direction:column;
                width:${props=>props.width}px;
                `

export {ThemeButton,Score,Head,Container,TimeLeft}