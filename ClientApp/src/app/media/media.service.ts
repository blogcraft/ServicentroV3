import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Galeria } from "./galeria";
import { Video } from "./video";

@Injectable()
export class MediaService {
    constructor(private http: HttpClient) {
    }

    getGalerias(): Observable<Galeria[]> {
        return this.http.get<Galeria[]>("assets/data/galerias.json");
    }

    getVideos(): Observable<Video[]> {
        return this.http.get<Video[]>("assets/data/videos.json")
    }
}
