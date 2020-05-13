import React from 'react'
import {action} from 'mobx'
import {observer} from 'mobx-react'
import {clearUserSession,getAccessToken} from '../../utils/StorageUtils.js'
import {withRouter,Redirect} from "react-router-dom";

import {productStore} from '../../../Common/stores'
import {cartStore} from '../../../Common/stores'
import LoadingWrapperWithFailure from '../../../Common/LoadingWrapperWithFailure/LoadingWrapperWithFailure'
import NoDataView from '../../../Common/LoadingWrapperWithFailure/NoDataView'
import ProductCart from '../../../e-commerceCart/components/ProductCart'

import SizeFilter from '../SizeFilter'
import Header from '../Header'
import ProductList from '../ProductList'

import {SignoutButton,Page,SignoutAndSizeChart,FilterAndProducts,Cart,SignoutAndCartIcon} from './styledComponents.js'

@observer
class ProductsPage extends React.Component{
    componentDidMount(){
        this.doNetworkCalls()
    }
    
    doNetworkCalls=()=>{
        productStore.getProductListAPI()
    }
    
    onClickSignOut=()=>{
        productStore.clearProductList()
        clearUserSession()
        this.props.history.push('/signinPage')
    }

    renderProductList=()=>{
        const {productList}=productStore
        if(productList.length===0){
            return <NoDataView/>;
        }
        else{
            return <ProductList onClickAddToCart={cartStore.onClickAddToCart}
                        list={productStore}/>
       }
    }
    
            
    render(){
        return(<Page>
        <SignoutAndSizeChart>
            <SignoutAndCartIcon>
            <SignoutButton onClick={this.onClickSignOut}>signout</SignoutButton>
            </SignoutAndCartIcon>
            <SizeFilter sizeFilter={productStore.sizeFilter} onSelectSize={productStore.onSelectSize}/>
        </SignoutAndSizeChart>
        <FilterAndProducts>
            <Cart><ProductCart /></Cart>
            <Header totalNoOfProductsDisplayed={productStore.totalNoOfProductsDisplayed}  filter={productStore.onSelectSize} sortBy={productStore.onChangeSortBy}/>
            
            <LoadingWrapperWithFailure
            apiStatus={productStore.getProductListAPIStatus}
            apiError={productStore.getProductListAPIError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderProductList}
            />
            
        </FilterAndProducts>
        </Page>)}
}

export default withRouter(ProductsPage)
