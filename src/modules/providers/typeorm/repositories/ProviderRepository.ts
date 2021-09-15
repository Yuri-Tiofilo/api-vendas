
import {EntityRepository, Repository} from 'typeorm'
import Provider from '../entities/Provider'

@EntityRepository(Provider) 
export default class ProductRepository extends Repository<Provider> {

    public async findByName(name: string): Promise<Provider | undefined> {
        let product = this.findOne({
            where: {
                name
            }
        })

        return product;
    }

}

