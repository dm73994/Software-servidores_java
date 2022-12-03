import IProductRepositoryImplArrays from "../Source Packages/co.unicauca.products.access/IProductReposirotyImpIArrays"
import Product from "../Source Packages/co.unicauca.products.domain.entity/Product"

let expressRef = require('express')
/**
 * 
 * 
 * 
 */
//Configuracion de conexiones
const initialize = new IProductRepositoryImplArrays()



//router
const productsRouter = expressRef.Router()

// middleware that is specific to this router
productsRouter.use((req: any, res: any, next: any) => {
  req.next()
})

/**
 * @GET
 * @brief FIND ALL base path from products
 */
productsRouter.get('/products', (req: any, res: { send: (arg0: any) => void }) => {
    let resource: any;
    try{
        resource = initialize.findAll();
    }catch(e){
        res.send(e)
    }
    res.send(resource)
})

/**
 * @GET
 * @brief FIND Product by id request
 */
productsRouter.get(`/products/:id`, (req: any, res: { send: (arg0: any) => void }) => {
  let response;
  const id: number = req.params.id
  try{
    response = initialize.findById(id)
    console.log(response)
  }catch(e){ 
    res.send(e)
  }
  res.send(response)
})

/**
 * @POST
 * @brief create Product by id request
 */
productsRouter.post(`/products`, (req: any, res: { send: (arg0: any) => void }) => {
  let response;
  try{
    console.log("CREAR PRODUCTO" );
    response = initialize.create(new Product(1, "Tv samsung", 200000))
    console.log(initialize.size());
  }catch(e){
    res.send(e)
  }
  res.send(response)
})

/**
 * @DELETE
 * @brief Delete product by id request
 */
productsRouter.delete(`/products/:id`, (req: any, res: { send: (arg0: any) => void }) => {
  let response;
  const id = req.params.id;
  try{
    response = initialize.delete(id)
  }catch(e){
    res.send(e)
  }
  res.send(response)
})

/**
 * @PUT
 * @brief Update product by id request
 */
productsRouter.put(`/products`, (req: any, res: { send: (arg0: any) => void }) => {
  let response;
  try{
    response = initialize.update(new Product(1, "Monitor Odissen Samsung", 200000))
  }catch(e){
    res.send(e)
  }
  res.send(response)
})
/**
 * 
 * 
 */
export default productsRouter