import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsModule } from './modules/songs/songs.module';
import { FavoritesModule } from './modules/favorites/favorites.module';
import { typeOrmConfig } from './config/database.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), SongsModule, FavoritesModule],
})
export class AppModule {}
