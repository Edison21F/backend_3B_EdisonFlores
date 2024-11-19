
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
                host: config.get('HOST') || 'localhost',
                port: +config.get('PORT'),
                username: config.get('USERNAME') || 'root',
                password: config.get('PASSWORD') || 'prueba',
                database: config.get('DATABASE'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            });
            return dataSource.initialize();

        }
    }
]