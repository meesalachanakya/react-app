import tw from 'tailwind.macro';
import styled from '@emotion/styled'

const EmojisGameApp=styled.div`
    ${props=>console.log(props.theme)}
    display:flex;
    flex-direction:column;
    color:${props=>props.theme==='light-mode'?'black':'white'};
    ${props=>props.theme==='light-mode'?tw`bg-indigo-100`:tw`bg-gray-900`};    
`

const Emojis=tw.div`flex justify-around flex-wrap`;

const ResultPage=styled.div`
                min-height:100vh;
                color:${props=>props.theme==='light-mode'?'black':'white'};
    ${props=>props.theme==='light-mode'?tw`bg-indigo-100`:tw`bg-gray-900`};
                `;

const Result=styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center; 
        align-items:center;
        background-color:light-blue;
        height:75vh;
        `

const Score=tw.div`text-2xl font-bold`;

const LoserComment=tw.div`text-red-500 text-2xl font-bold`;

const WinnerComment=tw.div`text-green-500 text-2xl font-bold`;

const Button=tw.button`justify-center items-center flex bg-blue-600 p-3 text-xl text-white rounded-md border-none`;


export {EmojisGameApp,Emojis,Result,ResultPage,Score,LoserComment,WinnerComment,Button} 

