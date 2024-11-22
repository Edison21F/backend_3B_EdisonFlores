import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AurhModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { PersonaModule } from './modules/persona/persona.module';
import { ProductoModule } from './modules/producto/producto.module';
import { RoleModule } from './modules/role/role.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { PedidoModule } from './modules/pedido/pedido.module';

@Module({
  imports: [AurhModule, UsersModule, DatabaseModule, ConfigModule, CategoriaModule, PersonaModule, ProductoModule, RoleModule, ClienteModule, PedidoModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService], 
})
export class AppModule {}
