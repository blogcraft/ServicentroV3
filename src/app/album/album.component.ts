import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { Album } from '../album';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers: [AlbumService]
})
export class AlbumComponent implements OnInit {
  albums: Album[];
  pagina: string;

  constructor(private service: AlbumService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
    this.route.data
      .subscribe((data: { pagina: string }) => {
        this.pagina = data.pagina;
      });
  }

}
