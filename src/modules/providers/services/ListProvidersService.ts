import { getCustomRepository } from "typeorm";
import Provider from "../typeorm/entities/Provider";
import ProviderRepository from "../typeorm/repositories/ProviderRepository";


class ListProvidersService {
    public async execute(): Promise<Provider[]>{
        const providerRepository = getCustomRepository(ProviderRepository)

        const providers = await providerRepository.find()

        return providers;
    }
}

export default ListProvidersService;