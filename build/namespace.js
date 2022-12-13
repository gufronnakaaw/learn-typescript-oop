"use strict";
var NamespaceTesting;
(function (NamespaceTesting) {
    // works!
    class Users {
    }
    // works!
    class Products {
    }
    NamespaceTesting.Products = Products;
})(NamespaceTesting || (NamespaceTesting = {}));
// access class
const products = new NamespaceTesting.Products();
// not works!
// class Users {
// }
