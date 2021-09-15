import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Provider from "../typeorm/entities/Provider";
import ProviderRepository from "../typeorm/repositories/ProviderRepository";

interface IRequest {
    id: string,
    name: string,
    email: string,
    cnpj: string,
    cpf: string,
    company_name: string
}

class UpdateProviderService {
    public async execute({id, name, email, cnpj, cpf, company_name}: IRequest): Promise<Provider>{
        let providerRepository = getCustomRepository(ProviderRepository);
        let provider = await providerRepository.findOne(id)
        if (!provider){
            throw new AppError('Forncedor não existe')
        }
        let providerExist = await providerRepository.findByName(name)
        if (providerExist){
            throw new AppError('Produto já tem um nome deste')
        }

        provider.name = name
        provider.email = email
        provider.cnpj = cnpj
        provider.cpf = cpf
        provider.company_name = company_name

        await providerRepository.save(provider)
        
        return provider
    }
}

export default UpdateProviderService