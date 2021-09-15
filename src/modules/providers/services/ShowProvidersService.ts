import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Provider from "../typeorm/entities/Provider";
import ProviderRepository from "../typeorm/repositories/ProviderRepository";

interface IRequest {
    id: string
}

class ShowProviderService {
    public async execute({id}: IRequest): Promise<Provider> {
        const providerRepository = getCustomRepository(ProviderRepository);
        const provider = await providerRepository.findOne(id);
        if (!provider){
            throw new AppError('Fornecedor não foi encontrado');
        }
        return provider;
    }
}

export default ShowProviderService