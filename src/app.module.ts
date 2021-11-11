import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CounterpartsModule } from './counterparts/counterparts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeormconfig';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    CounterpartsModule,
    TypeOrmModule.forRoot(typeORMConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  //constructor(private connection: Connection) {}
}
