/**
 * Representa un producto de la tienda
 *
 * @author Carlos David Mesa Martinez, Anderson Camilo Bonilla Belalcazar
 */
class Product {
    private _id: number;
    private _name: String;
    private _price: number;

    /**
     * 
     * @param {*} id 
     * @param {*} name 
     * @param {*} price 
     */
    constructor(id: number, name: String, price: number) {
        this._id = id;
        this._name = name;
        this._price = price;
    }

    get getId() {
        return this._id;
    }

    set setId(id: number) {
        this._id = id;
    }

    get getName() {
        return this._name;
    }

    set setName(name: String) {
        this._name = name;
    }

    get getPrice() {
        return this._price;
    }

    set setPrice(price: number) {
        this._price = price;
    }

    /**
     * OVERRIDED toString method
     */
    get [Symbol.toStringTag]() {
        return "Product{" + "id=" + this._id + ", name=" + this._name + ", price=" + this._price +'}';
    }

}

export default Product
