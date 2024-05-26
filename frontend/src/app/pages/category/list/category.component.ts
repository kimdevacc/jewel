import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category.model';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
    
    categories: Category[] = [];

    constructor(private categoryService: CategoryService, private router: Router) { }

    ngOnInit() {
        this.loadCategories();
    }

    loadCategories() {
        this.categoryService.getCategories().subscribe(response => {
            this.categories = response['data'];
        });
    }

    deleteCategory(id: number) {
        if (confirm('Are you sure you want to delete this category?')) {
            this.categoryService.deleteCategory(id).subscribe(
                () => {
                    this.categories = this.categories.filter(category => category.id !== id);
                },
                (error) => {
                    console.error('Error deleting category:', error);
                }
            );
        }
    }

    navigateToForm() {
        this.router.navigate(['admin/category/form', 0]);
    }
    
    viewCategory(id: string) {
        this.router.navigate(['admin/category/form', id]);
    }    
}
