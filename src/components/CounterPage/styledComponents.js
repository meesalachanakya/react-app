import tw from 'tailwind.macro';
import styled from '@emotion/styled'

const CounterApp=tw.div`h-screen flex justify-center items-center flex-col`

const Button=tw.button`bg-blue-700 px-3 py-1 text-xl rounded-md `

const Input=styled.input`${tw`text-center w-32 border-solid border-2 border-orange-300 text-2xl m-2`}`

const H1=tw.p`text-3xl font-bold`

const Counter=tw.div`flex items-center`

export {CounterApp,Button,H1,Counter,Input}