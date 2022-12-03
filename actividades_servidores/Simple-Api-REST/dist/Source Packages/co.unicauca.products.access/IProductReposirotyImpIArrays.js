"use strict";
/**
 * Implementación por defecto. El framewok contenedor de CDI (Contexts and
 * Dependency Injection) carga la implementación por defecto.
 *
 * @author Carlos David Mesa Martinez, Anderson Camilo Bonilla Belalcazar
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../co.unicauca.products.domain.entity/Product"));
class IProductRepositoryImplArrays {
    constructor() {
        /**
        * Por simplicidad los datos se cargan en un array.
        */
        this.products = new Array;
    }
    IProductRepositoryImplArrays() {
        if (this.products == null) {
            this.products = new Array;
            this.initialize();
        }
        this.initialize();
    }
    size() { return this.products.length; }
    initialize() {
        this.products.push(new Product_1.default(1, "Tv samsung", 200000));
        this.products.push(new Product_1.default(2, "Tv lg", 300000));
        this.products.push(new Product_1.default(1, "Tablet asus RESD-TD-34", 400000));
    }
    findAll() {
        console.log(this.products.length);
        return this.products;
    }
    findById(id) {
        console.log(id);
        for (let index = 0; index < this.products.length; index++) {
            const prod = this.products[index];
            console.log(prod);
            if (prod.getId == id) {
                return prod;
            }
        }
        return null;
    }
    create(newProduct) {
        const prod = this.findById(newProduct.getId);
        console.log("agregar " + newProduct);
        if (prod != null) {
            //Ya existe
            return false;
        }
        this.products.push(newProduct);
        return true;
    }
    update(product) {
        const prod = this.findById(product.getId);
        if (prod != null) {
            prod.setName = product.getName;
            prod.setPrice = product.getPrice;
            return true;
        }
        return false;
    }
    delete(id) {
        let i = 0;
        for (let index = 0; index < this.products.length; index++) {
            const prod = this.products[index];
            if (prod.getId == id) {
                this.products.splice(i, 1);
                i++;
                return true;
            }
        }
        return false;
    }
}
module.exports = IProductRepositoryImplArrays;
exports.default = IProductRepositoryImplArrays;
