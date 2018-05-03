import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { Album } from '../album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers: [AlbumService]
})
export class AlbumComponent implements OnInit {
  albums: Album[];

  constructor(private service: AlbumService) { }

  ngOnInit() {
    this.service.getAlbums().subscribe((albums) => {
      this.albums = albums;
    })
  }

}
