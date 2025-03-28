import { Controller, Get, Query } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}

  @Get()
  getAllSongs() {
    return this.songsService.getAllSongs();
  }

  @Get('search')
  searchSongs(@Query('q') query: string) {
    return this.songsService.searchSongs(query);
  }
}
