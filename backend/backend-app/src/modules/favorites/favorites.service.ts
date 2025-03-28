import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Favorite } from './favorites.entity';
import { Song } from '../songs/songs.entity';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectRepository(Favorite)
    private favoritesRepository: Repository<Favorite>,
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) {}

  async getFavorites(): Promise<Song[]> {
    const favorites = await this.favoritesRepository.find({ relations: ['song'] });
    return favorites.map((fav) => fav.song);
  }

  async addFavorite(songId: number) {
    const song = await this.songsRepository.findOne({ where: { id: songId } });
    if (!song) throw new Error('Song not found');

    const favorite = this.favoritesRepository.create({ song });
    return this.favoritesRepository.save(favorite);
  }

  async removeFavorite(id: number) {
    return this.favoritesRepository.delete(id);
  }
}
