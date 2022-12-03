/**
 * Interface de los servicios del repositorio
 *
 * @author Carlos David Mesa Martinez, Anderson Camilo Bonilla Belalcazar
 */
 import Product from '../co.unicauca.products.domain.entity/Product';

interface IProductRepository {
    findAll():Array<Product> |null
    findById(id: number):Product|null
    create(newProduct: Product):boolean ;
    update(product: Product):boolean;
    delete(id: number):boolean;
}

export default IProductRepository

