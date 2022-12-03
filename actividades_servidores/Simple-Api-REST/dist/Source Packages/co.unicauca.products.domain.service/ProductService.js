"use strict";
/**
 * Fachada de acceso al negocio por parte de la presentación. Usa el repositorio
 * por defecto. Si no se pone @Default tambien funciona, pues inyecta la
 * implementaició por defecto
 *
 * @author Carlos David Mesa Martinez, Anderson Camilo Bonilla Belalcazar
 */
Object.defineProperty(exports, "__esModule", { value: true });
//@RequestScoped
class ProductService {
    /**
    * Inyecta una implementación del repositorio
    */
    //@Inject
    //@Default
    //repo: IProductRepository;
    ProductService() {
        //this.repo = new ProductController();
    }
    findAll() {
        return null;
        //return this.repo.findAll();
    }
    findById(id) {
        return null;
        //return this.repo.findById(id);
    }
    create(prod) {
        return true;
        //return this.repo.create(prod);
    }
    update(prod) {
        return true;
        //return this.repo.update(prod);
    }
    delete(id) {
        return true;
        //return this.repo.delete(id);
    }
}
exports.default = ProductService;
