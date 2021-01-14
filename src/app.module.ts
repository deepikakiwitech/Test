import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [DatabaseModule, UsersModule, ConfigModule.forRoot({ isGlobal: true })],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule { }
