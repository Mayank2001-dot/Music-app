import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { FavoritesService } from './favorites.service';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  getFavorites() {
    return this.favoritesService.getFavorites();
  }

  @Post(':id')
  addFavorite(@Param('id') id: number) {
    return this.favoritesService.addFavorite(id);
  }

  @Delete(':id')
  removeFavorite(@Param('id') id: number) {
    return this.favoritesService.removeFavorite(id);
  }
}
