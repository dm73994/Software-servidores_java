/**
 * Implementación por defecto. El framewok contenedor de CDI (Contexts and
 * Dependency Injection) carga la implementación por defecto.
 *
 * @author Carlos David Mesa Martinez, Anderson Camilo Bonilla Belalcazar
 */

import Product from "../co.unicauca.products.domain.entity/Product";
import IProductRepository from "./IProductRepository";

class IProductRepositoryImplArrays implements IProductRepository {

    /**
    * Por simplicidad los datos se cargan en un array.
    */
    public products: Array<Product> = new Array<Product>;

    
    
    public IProductRepositoryImplArrays() {
        if (this.products == null) {
            this.products = new Array<Product>;
            this.initialize();
        }
        this.initialize();
    }
    public size(): number {return this.products.length;}
    private initialize(): void {
        this.products.push(new Product(1, "Tv samsung", 200000));
        this.products.push(new Product(2, "Tv lg", 300000));
        this.products.push(new Product(1, "Tablet asus RESD-TD-34", 400000));
    }

    findAll(): Array<Product> {
        console.log(this.products.length)
        return this.products;
    }
    
    findById(id: number): Product | null {
        console.log(id)

        for (let index = 0; index < this.products.length; index++) {
            const prod: Product = this.products[index]
            console.log(prod)
            if (prod.getId == id) {
                return prod;
            }            
        }

        return null;
    }
    
    create(newProduct: Product): boolean {
        const prod:Product|null = this.findById(newProduct.getId);
        console.log("agregar " + newProduct)
        if (prod != null) {
            //Ya existe
            return false;
        }
        this.products.push(newProduct);
        return true;
    }

    update(product: Product): boolean {
        const prod:Product|null = this.findById(product.getId);
        if (prod != null) {
            prod.setName = product.getName;
            prod.setPrice = product.getPrice;
            return true;
        }
        return false;
    }

    delete(id: number): boolean {
        let i: number = 0;

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

module.exports = IProductRepositoryImplArrays
export default IProductRepositoryImplArrays
