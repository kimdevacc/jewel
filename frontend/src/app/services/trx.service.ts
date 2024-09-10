import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TrxService {

    apiUrl = 'http://localhost:8000/api';
    authToken: any = null;
    authHeaders: any = null;

    constructor(private http: HttpClient) {
        this.authToken = localStorage.getItem('authToken');
        this.authHeaders = new HttpHeaders().set('Authorization', 'Bearer ' + this.authToken);
    }

    saveTrx(value: any): Observable<any> {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.authToken);
        return this.http.post<any>(`${this.apiUrl}/mine`, value, { headers }).pipe(
            tap ((response: any) => {
                console.log(response);
            }),
            catchError((error: any) => {
                console.error('Error saving user:', error);
                throw error; // Rethrow the error after logging
            })
        );
    }
}
