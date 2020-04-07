import tw from 'tailwind.macro'
//import index from './HowToPlay'

const Foot=tw.div`${props=>props.them==='light-mode'?tw`text-white`:tw`text-black`} 
${props=>props.theme==='light-mode'?tw`bg-white`:tw`bg-gray-800`};`

const Heading=tw.p`text-2xl font-bold`;

const Instruction=tw.p`text-xl`

export {Foot,Heading,Instruction}