import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';
import { Favorite } from './favorites.entity';
import { Song } from '../songs/songs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Favorite, Song])],
  controllers: [FavoritesController],
  providers: [FavoritesService],
})
export class FavoritesModule {}
