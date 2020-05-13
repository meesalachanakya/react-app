/*global expect*/
/*global jest*/
import React,{Component} from 'react'
import {cartStore} from '../../../Common/stores'
import {productStore} from '../../../Common/stores'
import productDetails from '../../../e-commerce/fixtures/productDetails.json'

describe('testing cart Store',()=>{
    
    beforeEach(()=>{
        cartStore.cartProductList=[]
    })
    
    it('on adding element to cart by onClickAddToCart ',()=>{
        let Id=12
        cartStore.onClickAddToCart(Id)
        expect(cartStore.cartProductList.length).toEqual(1)
    })
    
    it('testing clearing cart',()=>{
        cartStore.clearCart()
        expect(cartStore.cartProductList).toStrictEqual(Array())
    })
 
    it('remove product from cart',()=>{
        cartStore.onClickAddToCart(12)
        cartStore.onClickAddToCart(13)
        cartStore.onRemoveCartItem(12)
        expect(cartStore.cartProductList.length).toBe(1)
    })
    
    it('counting number of products in cart',()=>{
        cartStore.onClickAddToCart(12)
        cartStore.onClickAddToCart(13)
        cartStore.onClickAddToCart(12)
        expect(cartStore.noOfProductsInCart).toBe(3)
    })
    
    
    it('getting the product details using getProductDetails fn',()=>{
        let Id=12
        cartStore.getProductDetails(Id)
        expect(cartStore.cartProductList).toBe(productDetails[0])
    })
    
    it('caliculating the amount to be paid for products using totalCartAmout fn',()=>{
        cartStore.onClickAddToCart(12)
        cartStore.onClickAddToCart(13)
        //expect(cartStore.getProductDetails).toBe([productDetails[0],productDetails[1]])
        //console.log('%%%%%%%',productDetails[0].price)
        //console.log('$$$$$$$',cartStore.totalCartAmout)
        //expect(cartStore.totalCartAmout).toBe(productDetails[0].price*2+productDetails[1].price)
    })
})