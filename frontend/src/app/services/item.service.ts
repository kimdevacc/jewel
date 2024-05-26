import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Item } from '../model/item.model';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    
    apiUrl = 'http://localhost:8000/api';

    constructor(private http: HttpClient) { }

    getItems(): Observable<Item[]> {
        return this.http.get<Item[]>(`${this.apiUrl}/items`).pipe(
            catchError(error => {
                console.error('Error fetching items:', error);
                return of([]);
            })
        );
    }

    saveItem(item: Item): Observable<Item> {
        return this.http.post<Item>(`${this.apiUrl}/items`, item).pipe(
            tap((response) => {
                return response;
            }),
            catchError(error => {
                console.error('Error saving item:', error);
                throw error; // Rethrow the error after logging
            })
        );
    }

    updateItem(item: Item): Observable<Item> {
        return this.http.patch<Item>(`${this.apiUrl}/items/${item.id}`, item).pipe(
            tap((response) => {
                return response;
            }),
            catchError(error => {
                console.error('Error updating item:', error);
                throw error;
            })
        );
    }

    deleteItem(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/items/${id}`).pipe(
            tap((response) => {
                return response;
            }),
            catchError(error => {
                console.error('Error deleting item:', error);
                throw error;
            })
        );
    }

    getItemById(id: any): Observable<Item> {
        return this.http.get<Item>(`${this.apiUrl}/items/${id}`).pipe(
            tap((response) => {
                return response;
            }),
            catchError(error => {
                console.error('Error fetching item:', error);
                return of();
            })
        );
    }
}
