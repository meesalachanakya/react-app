import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const SizeChart=tw.div`flex flex-col m-1`
const Head=tw.div`text-xl m-2 font-bold`
const Sizes=tw.div`flex flex-row flex-wrap`
const Size=styled.button`${tw`h-10 w-10 m-1 flex justify-center items-center rounded-full`}
background-color:${props=>props.color==='false'?'lightgray':'black'};
color:${props=>props.color==='false'?'black':'white'}
`

export {SizeChart,Head,Sizes,Size}