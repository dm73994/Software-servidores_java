"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Representa un producto de la tienda
 *
 * @author Carlos David Mesa Martinez, Anderson Camilo Bonilla Belalcazar
 */
class Product {
    /**
     *
     * @param {*} id
     * @param {*} name
     * @param {*} price
     */
    constructor(id, name, price) {
        this._id = id;
        this._name = name;
        this._price = price;
    }
    get getId() {
        return this._id;
    }
    set setId(id) {
        this._id = id;
    }
    get getName() {
        return this._name;
    }
    set setName(name) {
        this._name = name;
    }
    get getPrice() {
        return this._price;
    }
    set setPrice(price) {
        this._price = price;
    }
    /**
     * OVERRIDED toString method
     */
    get [Symbol.toStringTag]() {
        return "Product{" + "id=" + this._id + ", name=" + this._name + ", price=" + this._price + '}';
    }
}
exports.default = Product;
