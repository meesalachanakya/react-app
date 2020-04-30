import tw from 'tailwind.macro'
import styled from '@emotion/styled'


const CartIcon=tw.div`sticky flex justify-center items-center`
const Close=tw.div`text-white bg-gray-800`
const CartView=tw.div`flex flex-col h-screen justify-between sticky`
const CheckoutAndSubTotal=tw.div``
const ProductsCount=tw.div`absolute font-bold text-yellow-600 -my-2 p-3 mx-1`
const ExpendedCart=styled.div`
${tw`h-screen bg-gray-800 fixed top-0 right-0 z-20`}
width:350px;
transition:all 0.5s ease;
`

export {ProductsCount,CartIcon,Close,CartView,CheckoutAndSubTotal,ExpendedCart}