import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Category } from '../model/category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    apiUrl = 'http://localhost:8000/api';

    constructor(private http: HttpClient) {
    }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${this.apiUrl}/categories`).pipe(
            catchError(error => {
                console.error('Error fetching categories:', error);
                return of([]);
            })
        );
    }

    saveCategory(category: Category): Observable<Category> {
        return this.http.post<Category>(`${this.apiUrl}/categories`, category).pipe(
            tap((response) => {
                return response;
            }),
            catchError(error => {
                console.error('Error saving category:', error);
                throw error; // Rethrow the error after logging
            })
        );
    }

    updateCategory(category: Category): Observable<Category> {
        return this.http.patch<Category>(`${this.apiUrl}/categories/${category.id}`, category).pipe(
            tap((response) => {
                return response;
            }),
            catchError(error => {
                console.error('Error updating category:', error);
                throw error;
            })
        );
    }

    deleteCategory(id: number): Observable<any> {
        return this.http.delete<any>(`${this.apiUrl}/categories/${id}`).pipe(
            tap((response) => {
                return response;
            }),
            catchError(error => {
                console.error('Error deleting category:', error);
                throw error;
            })
        );
    }

    getCategoryById(id: any): Observable<Category> {
        return this.http.get<Category>(`${this.apiUrl}/categories/${id}`).pipe(
            tap((response) => {
                return response;
            }),
            catchError(error => {
                console.error('Error fetching category:', error);
                return of();
            })
        );
    }
}
