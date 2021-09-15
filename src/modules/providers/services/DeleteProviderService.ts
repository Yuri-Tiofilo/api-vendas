
// vamos criar a interface de coleta de dados
import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import ProviderRepository from "../typeorm/repositories/ProviderRepository";

interface IRequest {
    id: string
}

class DeleteProviderService {
    public async execute({id}: IRequest): Promise<void>{
        let providerRepository = getCustomRepository(ProviderRepository);
        let provider = await providerRepository.findOne(id)
        if (!provider) {
            throw new AppError('Forncedor não existe')
        }
        await providerRepository.remove(provider);
    }

}

export default DeleteProviderService