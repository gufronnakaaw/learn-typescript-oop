"use strict";
class Product {
    constructor(productName) {
        this._productName = productName;
    }
    get getProductName() {
        return this._productName;
    }
    set setProductName(productName) {
        this._productName = productName;
    }
}
const indomie = new Product('indomie goreng');
indomie.setProductName = 'indomie rebus kari ayam'; // set
console.log(indomie.getProductName); // get
