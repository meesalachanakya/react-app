/*global expect*/
/*global jest*/
import React,{Component} from 'react'
import { API_INITIAL,API_FETCHING,API_SUCCESS,API_FAILED} from "@ib/api-constants";
import ProductStore from '.'
import ProductService from '../../services/ProductService/ProductAPI.js'
import productDetails from '../../fixtures/productDetails.json'


describe('testing product store',()=>{
    let productAPI
    let productStore
    
    beforeEach(()=>{
        productAPI=new ProductService
        productStore=new ProductStore(productAPI)
    })
    
    it('test initialising productStore',()=>{
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL)
        expect(productStore.getProductListAPIError).toBe(null)
    })
    
    it('test products fetching productAPI',()=>{
        const mockLoadingPromise=new Promise(function(resolve,reject){})
        const mockProductAPI=jest.fn();
        mockProductAPI.mockReturnValue(mockLoadingPromise);
        productAPI.getProductListAPI=mockProductAPI;
        
        productStore.getProductListAPI();
        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING);
    });
    
    it('test productAPI success',async()=>{
        const mockSuccessPromise=new Promise(function(resolve,reject){
            resolve(productDetails)});
        const mockProductAPI=jest.fn();
        mockProductAPI.mockReturnValue(mockSuccessPromise);
        productAPI.getProductListAPI=mockProductAPI;
        
        await productStore.getProductListAPI();
        expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
    });
    
    it('test productAPI failure',async()=>{
        const mockFailurePromise=new Promise(function(resolve,reject){
            reject(new Error('error'));
        }).catch(()=>{});
        const mockProductAPI=jest.fn();
        mockProductAPI.mockReturnValue(mockFailurePromise);
        productAPI.getProductListAPI=mockProductAPI;
        
        await productStore.getProductListAPI();
        expect(productStore.getProductListAPIStatus).toBe(API_FAILED);
        expect(productStore.getProductListAPIError).toBe(`Cannot read property 'map' of undefined`);
    });
    
    it('testing onChangeSortBy method to change sorting',()=>{
        const sortType='ACSENDING';
        productStore.onChangeSortBy(sortType);
        expect(productStore.sortBy).toBe(sortType);
    });
    
    it('testing onSelectSize method to change selected list',()=>{
        const selectedSize='X';
        productStore.onSelectSize(selectedSize);
        expect(productStore.sizeFilter).toStrictEqual(Array('X'));
        productStore.onSelectSize('L');
        expect(productStore.sizeFilter).toStrictEqual(Array('X','L'));
        productStore.onSelectSize('X');
        expect(productStore.sizeFilter).toStrictEqual(Array('L'));
    });
    
    it('clearing the product list to null',()=>{
        productStore.clearProductList();
        expect(productStore.productList).toStrictEqual(Array());
    });
    
    it('filtering products to display',()=>{
        const products=[productDetails[0],productDetails[1],productDetails[2]]
        productStore.setProductListResponse(products)
        const sortType='ascending';
        productStore.onChangeSortBy(sortType);
        expect(productStore.sortBy).toBe(sortType)
        productStore.onSelectSize('S');
        productStore.onSelectSize('L');
        expect(productStore.sizeFilter).toStrictEqual(Array('S','L'))
        expect(productStore.products).toEqual([productStore.productList[2],productStore.productList[0]])
    });
    
    it('length of product list',()=>{
        expect(productStore.totalNoOfProductsDisplayed).toBe(productStore.productList.length)
    })
    
}) 