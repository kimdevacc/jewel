// item.component.ts
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
    
    items: Item[] = [];

    constructor(private itemService: ItemService, private router: Router) { }

    ngOnInit() {
        this.loadItems();
    }

    loadItems() {
        this.itemService.getItems().subscribe(response => {
            this.items = response['data'];
        });
    }

    deleteItem(id: number) {
        if (confirm('Are you sure you want to delete this item?')) {
            this.itemService.deleteItem(id).subscribe(
                () => {
                    this.items = this.items.filter(item => item.id !== id);
                },
                (error) => {
                    console.error('Error deleting item:', error);
                }
            );
        }
    }

    navigateToForm() {
        this.router.navigate(['admin/item/form', 0]);
    }
    
    viewItem(id: number) {
        this.router.navigate(['admin/item/form', id]);
    }    
}
