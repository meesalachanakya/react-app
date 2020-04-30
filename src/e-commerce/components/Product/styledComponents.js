import tw from 'tailwind.macro'
import styled from '@emotion/styled'

const Card=tw.div`flex flex-col items-center w-48 justify-between m-5`
const Title=tw.div``
//const Shipping=tw.div`absolute p-1 rounded-sm top-5 bg-black text-xs text-white`
const Shipping=styled.div`margin-left:auto;
${tw`z-10 p-1 rounded-sm top-5 bg-black text-xs text-white`}
`
const Image=tw.img`w-48`
const Cost=tw.div`flex`
const Formate=tw.div``
const Price=tw.div``
const Installments=tw.div`flex text-sm text-gray-600`
const Count=tw.div``
const Amount=tw.div``
const AddToCartButton=tw.button`w-48 h-12 m-1 rounded-md border-solid border  border-gray-600 bg-black text-white`


export {Card,Title,Shipping,Image,Cost,Formate,Price,Installments,Count,Amount,AddToCartButton}