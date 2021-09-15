import { request, Request, Response } from "express";
import CreateProviderService from "../services/CreateProviderService";
import DeleteProviderService from "../services/DeleteProviderService";
import ListProvidersService from "../services/ListProvidersService";
import ShowProvidersService from "../services/ShowProvidersService";
import UpdateProvidersService from "../services/UpdateProvidersService";

export default class ProviderController {
    public async create(request: Request, response: Response): Promise<Response> {
       let {name, price, quantity} = request.body;
        let createProduct = new CreateProviderService()
        let product = await createProduct.execute({
            name, price, quantity
        })
        return response.json(product);
    }

    public async delete(request: Request, response: Response): Promise <Response> {
        let {id} = request.params
        let deleteProduct = new DeleteProviderService()
        await deleteProduct.execute({id}); 

        return response.json([]);
    }
    
    public async index(request: Request, response: Response): Promise<Response>{
        let listProducts = new ListProvidersService()
        let products= await listProducts.execute();

        return response.json(products)
    } 

    public async show(request: Request, response: Response): Promise<Response>{
        let {id} = request.params
        let showProduct = new ShowProvidersService()
        let product = await showProduct.execute({id});
        return response.json(product);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        let {id} = request.params
        let {name, price, quantity} = request.body

        let updateProduct = new UpdateProvidersService();

        let product = await updateProduct.execute({id, name, price, quantity});
        
        return response.json(product)
    }
}