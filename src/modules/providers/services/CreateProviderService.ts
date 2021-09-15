import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Provider from "../typeorm/entities/Provider";
import ProviderRepository from "../typeorm/repositories/ProviderRepository";

interface IRequest {
    name: string,
    email: string,
    cnpj: string,
    cpf: string,
    company_name: string
}

class CreateProviderService {
    public async execute({name, email, cnpj, cpf, company_name}: IRequest): Promise <Provider> {
        let providerRepository = getCustomRepository(ProviderRepository)
        let providerExists = await providerRepository.findByName(name);
        
        if (providerExists){
            throw new AppError("Já existe forncedor com este nome");
        }

        const provider = providerRepository.create({
            name, email, cnpj, cpf, company_name
        })

        await providerRepository.save(provider);

        return provider;
    }
}

export default CreateProviderService;