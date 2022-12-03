require('dotenv').config()

import express from 'express';
import productsRouter from './Client-res/productsRouter';
import IProductRepositoryImplArrays from './Source Packages/co.unicauca.products.access/IProductReposirotyImpIArrays';

const app = express()
const port = process.env.PORT;


app.use('/', productsRouter )

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})