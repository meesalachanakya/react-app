import tw from 'tailwind.macro'

const Page = tw.div `flex flex-row min-h-screen bg-white`
const SignoutAndSizeChart = tw.div `flex flex-col w-1/4`
const FilterAndProducts = tw.div `flex flex-col w-3/4`
const Cart = tw.div `flex justify-end m-2 sticky`
const SignoutAndCartIcon = tw.div `flex justify-between`
const SignoutButton = tw.button `border border-2 border-black rounded-md p-1`
const Pagination = tw.div `flex`
const GotoPreviousPage = tw.div `flex justify-center items-center bg-black p-1`
const CurrentPage = tw.div `flex justify-center items-center p-1`
const TotalPages = tw.div `flex justify-center items-center p-1`
const GotoNextPage = tw.div `flex justify-center items-center bg-black p-1`

export {
    Page,
    SignoutAndSizeChart,
    FilterAndProducts,
    Cart,
    SignoutAndCartIcon,
    SignoutButton,
    GotoNextPage,
    TotalPages,
    CurrentPage,
    GotoPreviousPage,
    Pagination
}
