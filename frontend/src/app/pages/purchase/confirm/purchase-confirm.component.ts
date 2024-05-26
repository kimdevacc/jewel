import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { Purchase } from 'src/app/model/purchase.model';
import { ItemService } from 'src/app/services/item.service';
import { PurchaseService } from 'src/app/services/purchage.service';
@Component({
    selector: 'app-purchase-confirm',
    templateUrl: './purchase-confirm.component.html',
    styleUrls: ['./purchase-confirm.component.scss']
})
export class PurchaseConfirmComponent implements OnInit {
    routerId: string;
    url = window.location.href;
	currentURL: string = '';
    item: Item = { id: null, item_name: '', item_description: '', category: '', qty: null, item_code: '' };

    constructor(
        private route: ActivatedRoute,
        private itemService: ItemService,
        private purchaseService: PurchaseService
    ) {
        this.route.params.subscribe(params => {
            this.routerId = params['id'];
        });
    }

    ngOnInit() {
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

    addToOrder() {
        let purchase: Purchase = { id: 0, item_code: this.item.item_code, ordered_by: 'currentCustomer', qty: 1, status: 'New' };
        this.purchaseService.addPurchase(purchase).subscribe(
            (response) => {
                window.close();
            },
            (error) => {
                console.error('Error saving item:', error);
            }
        );
    }
}