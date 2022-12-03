"use strict";
/**
 * Implementación del repositorio alternativa. Se puede cambiar las annotaciones
 * @Default y @Alternative al gusto.
 *
 * @author Carlos David Mesa Martinez, Anderson Camilo Bonilla Belalcazar
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_1 = __importDefault(require("../co.unicauca.products.domain.entity/Product"));
//@RequestScoped
//@Alternative
class IProductRepositoryImplArrays2 {
    IProductRepositoryImplArrays2() {
        if (IProductRepositoryImplArrays2.products == null) {
            IProductRepositoryImplArrays2.products = new Array;
            this.initialize();
        }
    }
    initialize() {
        IProductRepositoryImplArrays2.products.push(new Product_1.default(1, "Cama duplex", 300000));
        IProductRepositoryImplArrays2.products.push(new Product_1.default(2, "Sofa cama", 300000));
        IProductRepositoryImplArrays2.products.push(new Product_1.default(1, "Nochero", 400000));
    }
    findAll() {
        return IProductRepositoryImplArrays2.products;
    }
    findById(id) {
        IProductRepositoryImplArrays2.products.forEach((prod) => {
            if (prod.getId == id) {
                return prod;
            }
        });
        return null;
    }
    create(newProduct) {
        const prod = this.findById(newProduct.getId);
        if (prod != null) {
            //Ya existe
            return false;
        }
        IProductRepositoryImplArrays2.products.push(newProduct);
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
        IProductRepositoryImplArrays2.products.forEach((prod) => {
            if (prod.getId == id) {
                IProductRepositoryImplArrays2.products.splice(i, 1);
                i++;
                return true;
            }
        });
        return false;
    }
}
