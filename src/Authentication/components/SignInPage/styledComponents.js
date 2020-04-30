import tw from 'tailwind.macro';


const Page=tw.div`w-screen h-screen flex justify-center items-center`
const Head=tw.div`text-xl m-2 font-bold`
const UserName=tw.input`w-48 p-2 m-1 rounded-md border-solid border  border-gray-600  flex justify-center items-center`
const Password=tw.input`w-48 p-2 m-1 rounded-md border-solid border border-gray-600 flex justify-center items-center`
const SignInWindow=tw.form`bg-white p-10 rounded-md`
const Submit=tw.button`w-48 h-12 m-2 rounded-md border-solid border  border-gray-600 bg-black text-white`
const ErrorMsg=tw.div`m-1 text-xs text-red-500 font-bold`

export {Page,Head,UserName,Password,SignInWindow,Submit,ErrorMsg}