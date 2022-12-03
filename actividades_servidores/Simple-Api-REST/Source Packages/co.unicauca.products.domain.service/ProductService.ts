

/**
 * Fachada de acceso al negocio por parte de la presentación. Usa el repositorio
 * por defecto. Si no se pone @Default tambien funciona, pues inyecta la
 * implementaició por defecto
 *
 * @author Carlos David Mesa Martinez, Anderson Camilo Bonilla Belalcazar
 */

import IProductRepository from "../co.unicauca.products.access/IProductRepository";
import Product from "../co.unicauca.products.domain.entity/Product";
import ProductController from "../co.unicauca.products.presentation.rest/ProductController";

//@RequestScoped
class ProductService {
    /**
    * Inyecta una implementación del repositorio
    */
    //@Inject
    //@Default
    //repo: IProductRepository;

    public ProductService() {
        //this.repo = new ProductController();
    }
    
    findAll(): Product[]|null {
        return null;
        //return this.repo.findAll();
    }
    
    public findById(id: number): Product|null {
        return null;
        //return this.repo.findById(id);
    }
    public create(prod: Product): boolean {
        return true;
        //return this.repo.create(prod);
    }
    public update(prod: Product): boolean {
        return true;
        //return this.repo.update(prod);
    }
    public delete(id: number): boolean {
        return true;
        //return this.repo.delete(id);
    }
}

export default ProductService;
