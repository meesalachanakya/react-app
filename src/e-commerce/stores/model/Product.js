
class Product {
    productId
    availableSizes
    currencyFormate
    currencyId
    productDescription
    installmentsCount
    isFreeShipping 
    price
    printStyle
    title
    imageURl
    
    
    constructor(productObject){
        //alert(223)
        this.productId=productObject.id
        this.availableSizes=productObject.availableSizes
        this.currencyFormate=productObject.currencyFormat
        this.currencyId=productObject.currencyId
        this.productDescription=productObject.description
        this.installmentsCount=productObject.installments
        this.isFreeShipping=productObject.isFreeShipping
        this.price=productObject.price
        this.printStyle=productObject.style
        this.title=productObject.title
        this.imageURl=productObject.image
    }
}

export default Product