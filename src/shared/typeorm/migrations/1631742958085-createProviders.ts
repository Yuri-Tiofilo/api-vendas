import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createProviders1631742958085 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // vamos criar a tabela no PostgreSQL
        await queryRunner.createTable(new Table({
           name: 'providers',
           columns: [
               {
                   name: 'id',
                   type: 'uuid',
                   isPrimary: true,
                   generationStrategy: 'uuid',
                   default: 'uuid_generate_v4()'
               },
               {
                   name: 'name',
                   type: 'varchar'
               },
               {
                   name: 'email',
                   type: 'varchar'
               },
               {
                   name: 'cnpj',
                   type: 'varchar'
               },
               {
                    name: 'cpf',
                    type: 'varchar'
                },
                {
                    name: 'company_name',
                    type: 'varchar'
                },
              
               {
                   name: 'created_at',
                   type: 'timestamp with time zone',
                   default: 'now()'
               },
               {
                   name: 'updated_at',
                   type: 'timestamp with time zone',
                   default: 'now()'
               }
           ]
       }))
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('providers')
    }

}
