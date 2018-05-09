import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Galeria } from "../galeria";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MediaService {
    constructor(private http: HttpClient) {
    }

    getGalerias(): Observable<Galeria[]> {
        return this.http.get<Galeria[]>("assets/data/galerias.json");
    }
}