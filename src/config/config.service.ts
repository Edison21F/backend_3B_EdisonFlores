import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { parse } from 'dotenv';


@Injectable()
export class ConfigService {
    private readonly envConfig: { [key:string]:string }
    constructor() {
        const isDevelopmentEnv = process.env.NODE_ENV !== 'production'
        if (isDevelopmentEnv){
            const envFilePath = __dirname + '/../../test/.env.development'
            const existsPatch = fs.existsSync(envFilePath)
            if (!existsPatch) {
                console.log('.env.develioment no existe DEVELOMENT')
                process.exit(0)
            }
            this.envConfig = parse(fs.readFileSync(envFilePath))
        }
        else{
            const envFilePath = __dirname + '/../../test/.env.production'
            const existsPatch = fs.existsSync(envFilePath)
            if (!existsPatch) {
                console.log('.env.production no existe PRODUCTION')
            }
            this.envConfig = parse(fs.readFileSync(envFilePath))
        }
    }
    get (key: string): string {
        return this.envConfig[key];
    }

}
