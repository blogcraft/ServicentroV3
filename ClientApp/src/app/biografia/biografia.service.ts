import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bio } from './biografia';

@Injectable()
export class BiografiaService {
    constructor(private http: HttpClient) {
    }

    getBios(): Observable<Bio[]> {
        return this.http.get<Bio[]>('assets/data/bios.json');
    }
}
