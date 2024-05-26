// item.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Purchase } from 'src/app/model/purchase.model';
import { PurchaseService } from 'src/app/services/purchage.service';

@Component({
    selector: 'app-purchase',
    templateUrl: './purchase.component.html',
    styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
    
    purchases: Purchase[] = [];

    constructor( private purchaseService: PurchaseService, private router: Router) { }

    ngOnInit() {
        this.loadPurchases();
    }

    loadPurchases() {
        this.purchaseService.getPurchases().subscribe(response => {
            this.purchases = response['data'];
        });
    }

    navigateToForm() {
        this.router.navigate(['admin/item/form', 0]);
    }
    
    confirmOrder(id: number) {
        this.router.navigate(['admin/item/qr', id]);
    }
}
