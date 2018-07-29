import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Album } from "../album";
import { Observable } from "rxjs";

@Injectable()
export class AlbumService {
    constructor(private http: HttpClient) {
    }

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>("assets/data/albums.json");
    }
}