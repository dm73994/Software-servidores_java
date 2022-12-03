/**
 * Implementación del repositorio alternativa. Se puede cambiar las annotaciones
 * @Default y @Alternative al gusto.
 * 
 * @author Carlos David Mesa Martinez, Anderson Camilo Bonilla Belalcazar
 */

import Product from "../co.unicauca.products.domain.entity/Product";
import IProductRepository from "./IProductRepository";
//@RequestScoped
//@Alternative
class IProductRepositoryImplArrays2 implements IProductRepository {

    /**
    * Por simplicidad los datos se cargan en un array.
    */
    public static products: Array<Product>;
    
    public IProductRepositoryImplArrays2() {
        if (IProductRepositoryImplArrays2.products == null) {
            IProductRepositoryImplArrays2.products = new Array<Product>;
            this.initialize();
        }
    }
    private initialize(): void {
        IProductRepositoryImplArrays2.products.push(new Product(1, "Cama duplex", 300000));
        IProductRepositoryImplArrays2.products.push(new Product(2,  "Sofa cama", 300000));
        IProductRepositoryImplArrays2.products.push(new Product(1,  "Nochero", 400000));
    }


    findAll(): Product[] {
        return IProductRepositoryImplArrays2.products;
    }
    
    findById(id: number): Product|null {
        IProductRepositoryImplArrays2.products.forEach((prod) => {
            if (prod.getId == id) {
                return prod;
            }
        })
        return null;
    }
    
    create(newProduct: Product): boolean {
        const prod:Product|null = this.findById(newProduct.getId);
        if (prod != null) {
            //Ya existe
            return false;
        }
        IProductRepositoryImplArrays2.products.push(newProduct);
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

