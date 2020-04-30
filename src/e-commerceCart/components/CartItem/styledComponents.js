import tw from 'tailwind.macro'


const CartListDisplay=tw.div`flex h-24 flex-row border border-2 border-white-500 justify-around`
const Image=tw.img`w-12 object-contain`
const Details=tw.div`flex flex-col`
const Title=tw.div`text-xs text-white`
const Style=tw.div`text-xs text-white`
const RemoveAndPrice=tw.div`flex flex-col`
const Remove=tw.div`text-xs text-white font-extrabold`
const Quantity=tw.div`text-xs text-white`
const Price=tw.div`text-xs text-white`

export {CartListDisplay,Image,Details,Title,Style,RemoveAndPrice,Remove,Quantity,Price}