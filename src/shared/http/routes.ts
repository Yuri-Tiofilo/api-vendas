import {Router} from 'express'

const routes = Router();

import productRouter from '../../modules/products/routes/product.routes'
import providerRouter from '../../modules/providers/routes/provider.routes'

routes.use('/products', productRouter)
routes.use('/providers', providerRouter)

export default routes