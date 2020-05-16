import { observable, action, computed } from 'mobx';
import CartItemModel from '../model';


class CartStore {

    @observable cartProductList

    constructor(productStore) {
        this.productStore = productStore
        this.cartProductList = [];
    }

    @action.bound
    onClickAddToCart(Id) {
        if (this.cartProductList.find((each) => each.productId === Id)) {
            let index;
            for (let i = 0; i < this.cartProductList.length; i++) {
                if (this.cartProductList[i].productId === Id) { index = i }
            }
            this.cartProductList[index].incrementQuantity();
        }
        else {
            const cartObject = {
                productId: Id
            };
            this.cartProductList.push(new CartItemModel(cartObject));
        }
    }

    @action.bound
    onRemoveCartItem(productId) {
        this.cartProductList = this.cartProductList.filter((each) => {
            if (Number(each.productId) !== productId)
                return (each)
        });
    }

    @action.bound
    clearCart() {
        this.cartProductList = [];
    }

    @action.bound
    getProductDetails(productId) {
        return this.productStore.productList.filter((each) => each.productId === productId);
    }

    @computed
    get totalCartAmout() {
        let totalAmount = 0;
        this.cartProductList.forEach((eachProduct) =>
            totalAmount += (eachProduct.quantity * (this.getProductDetails(eachProduct.productId)[0].price)));
        return `${this.productStore.productList[0].currencyFormate}` + Math.round(totalAmount, 2);
    }

    @computed
    get noOfProductsInCart() {
        let count = 0;
        this.cartProductList.forEach((eachProduct) => count += eachProduct.quantity * 1);
        return count;
    }
}

export default CartStore;
