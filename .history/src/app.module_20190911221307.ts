import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './author/author.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      // host: '10.2.126.183',
      host: '192.168.1.28',
      port: 3306,
      username: 'admin',
      password: 'S3cr3tP@ssw0rd',
      database: 'test',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // synchronize: true, - disable this in production, this will delete existing table if there are any and overwrite
    }),
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
