import { request, Request, Response } from "express";
import CreateProviderService from "../services/CreateProviderService";
import DeleteProviderService from "../services/DeleteProviderService";
import ListProvidersService from "../services/ListProvidersService";
import ShowProvidersService from "../services/ShowProvidersService";
import UpdateProvidersService from "../services/UpdateProvidersService";

export default class ProviderController {
    public async create(request: Request, response: Response): Promise<Response> {
       let { name, cnpj, company_name, cpf, email } = request.body;
        let createProvider = new CreateProviderService()
        let product = await createProvider.execute({
            name, cnpj, company_name, cpf, email
        })
        return response.json(product);
    }

    public async delete(request: Request, response: Response): Promise <Response> {
        let { id } = request.params
        let deleteProvider = new DeleteProviderService()
        await deleteProvider.execute({id}); 

        return response.json([]);
    }
    
    public async index(request: Request, response: Response): Promise<Response>{
        let list = new ListProvidersService()
        let products= await list.execute();

        return response.json(products)
    } 

    public async show(request: Request, response: Response): Promise<Response>{
        let {id} = request.params
        let showProvider = new ShowProvidersService()
        let provider = await showProvider.execute({id});
        return response.json(provider);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        let { id } = request.params
        let { name, cnpj, company_name, cpf, email} = request.body

        let updateProvider = new UpdateProvidersService();

        let provider = await updateProvider.execute({ id, name, cnpj, company_name, cpf, email});
        
        return response.json(provider)
    }
}