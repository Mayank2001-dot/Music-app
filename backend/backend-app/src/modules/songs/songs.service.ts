import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './songs.entity';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songsRepository: Repository<Song>,
  ) {}

  async getAllSongs(): Promise<Song[]> {
    return this.songsRepository.find();
  }

  async searchSongs(query: string): Promise<Song[]> {
    return this.songsRepository.find({
      where: [{ title: query }, { artist: query }, { album: query }],
    });
  }
}
