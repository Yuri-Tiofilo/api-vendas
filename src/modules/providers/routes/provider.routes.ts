
import { celebrate, Segments, Joi } from 'celebrate';
import {Router} from 'express';


import ProviderController from '../controllers/ProviderController';

let productRouter = Router()

let providerController = new ProviderController()

productRouter.get('/', providerController.index)
productRouter.get('/:id', 
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}),
providerController.show)
productRouter.post('/', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            price: Joi.number().precision(2).required(),
            quantity: Joi.number().required()
        }
    }),
providerController.create)
productRouter.put('/:id', 
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        name: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        quantity: Joi.number().required()
    }
}),
providerController.update)
productRouter.delete('/:id', 

celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}),
providerController.delete)

export default productRouter