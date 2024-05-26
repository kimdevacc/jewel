import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/category.model';
import { Item } from 'src/app/model/item.model';
import { CategoryService } from 'src/app/services/category.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
    selector: 'app-qr-form',
    templateUrl: './qr-form.component.html',
    styleUrls: ['./qr-form.component.scss']
})
export class QrFormComponent implements OnInit {
    item: Item = { id: null, item_name: '', item_description: '', category: '', qty: null, item_code: '' };
    categories: Category[] = [];

    routerId: string;

    constructor(
        private categoryService: CategoryService,
        private itemService: ItemService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(params => {
            this.routerId = params['id'];
        });
    }

    ngOnInit() {
        this.loadCategories();
        if(this.routerId) {
            this.itemService.getItemById(this.routerId).subscribe(
                (response) => {
                    this.item = response['data'];
                },
                (error) => {
                    // handle error
                    console.error('Error retrieving category:', error);
                }
            );
        }
    }

    loadCategories() {
        this.categoryService.getCategories().subscribe(
            (response) => {
                this.categories = response['data'];
            },
            (error) => {
                console.error('Error loading categories:', error);
            }
        );
    }

    saveItem() {
        this.itemService.saveItem(this.item).subscribe(
            (response) => {
                console.log('Item saved successfully:', response);
                this.navigateBack();
            },
            (error) => {
                console.error('Error saving item:', error);
            }
        );
    }

    updateItem() {
        this.itemService.updateItem(this.item).subscribe(
            (response) => {
                // handle success
                console.log('Item updated successfully:', response);
                this.navigateBack();
            },
            (error) => {
                // handle error
                console.error('Error updating item:', error);
            }
        );
    }

    deleteItem() {
        this.itemService.deleteItem(this.item.id).subscribe(
            () => {
                console.log('Item deleted successfully');
                this.item = { id: null, item_name: '', item_description: '', category: null, qty: null, item_code: '' };
                this.navigateBack();
            },
            (error) => {
                console.error('Error deleting item:', error);
            }
        );
    }

    navigateBack() {
        this.router.navigate(['admin/item']);
    }
}