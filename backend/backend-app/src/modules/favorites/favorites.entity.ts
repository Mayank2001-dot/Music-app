import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Song } from '../songs/songs.entity';

@Entity('favorites')
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Song, (song) => song.id)
  song: Song;
}
