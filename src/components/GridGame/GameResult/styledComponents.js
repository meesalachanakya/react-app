import styled from '@emotion/styled'
import tw from 'tailwind.macro'

const ResultPage=styled.div`
                min-height:100vh;
                ${tw`flex flex-col items-center`}
                `
const Result=styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center; 
        align-items:center;
        background-color:light-blue;
        height:75vh;
        width:100vw;
        color:${props=>props.theme==='LIGHT'?'black':'white'};
    ${props=>props.theme==='LIGHT'?tw`bg-indigo-100`:tw`bg-gray-900`};`
    
const Score=tw.div`text-xl font-bold`;

const Comment=tw.div`text-red-500 text-2xl font-bold`;

const Button=tw.button`justify-center items-center flex bg-blue-600 p-3 text-xl text-white rounded-md border-none`;

export {Button,Comment,Score,Result,ResultPage}