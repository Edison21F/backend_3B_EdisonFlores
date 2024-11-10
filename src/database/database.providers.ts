
import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm"

export const databaseProvider = [
    {
        //configuracion 1 provedor de BDD
        provide: 'DATABASE_CONNECTION',
        inject : [ConfigService],
        useFactory: (config : ConfigService) => {
            //creamos una instancia de la clase de datos
            const dataSource = new DataSource({
                type: 'postgres',
                host: config.get('HOST'),
                port: +config.get('PORT'),
                username: config.get('USERNAME'),
                password: config.get('PASSWORD'),
                database: config.get('DATABASE'),
            });
            return dataSource.initialize();

        }
    }
]