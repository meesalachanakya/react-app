import React from 'react';
import {observer} from 'mobx-react';
import {action} from 'mobx';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card,Title,Shipping,Image,Cost,Formate,Price,Installments,Count,Amount,AddToCartButton} from './styledComponents.js';

@observer
class Product extends React.Component{
    
    
    @action.bound
    toastImage(){
        
        return <div>
             <img src="https://images.app.goo.gl/kgyd5oynkKB9u3DTA"/>
             <span>Product added to Cart</span>
              
        </div>;
        
    }
    @action.bound
    onClickAddToCart(){
        toast(this.toastImage());
        this.props.onClickAddToCart(this.props.product.productId);
    }
    render(){
        const image=this.props.product.imageURl;
        const {title,currencyFormat,price}=this.props.product;
        const installments=this.props.product.installmentsCount;
        const chunks=Math.round(price/installments,2);
        return(<Card>
            {this.props.product.isFreeShipping?<Shipping>Free Shipping</Shipping>:undefined}
            <Image src={image} alt='image'/>
            <Title>{title}</Title>
            <Cost>
                <Formate>{currencyFormat}</Formate>
                <Price>{price}</Price>
            </Cost>
            <Installments>
            or<Count>{installments}</Count>x<Amount>{chunks}</Amount>
            </Installments>
            <AddToCartButton onClick={this.onClickAddToCart}>Add to cart</AddToCartButton>
            <ToastContainer
                position="bottom-center"
                autoClose={3000}    
                hideProgressBar
                newestOnTop={false}
                rtl={false} 
                pauseOnFocusLoss
                draggable
                pauseOnHover/>
        </Card>)
    }
}

export default Product