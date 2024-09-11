import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { Purchase } from 'src/app/model/purchase.model';
import { EmailDataService } from 'src/app/services/email-data.service';
import { ItemService } from 'src/app/services/item.service';
import { PurchaseService } from 'src/app/services/purchage.service';
import { TrxService } from 'src/app/services/trx.service';
@Component({
    selector: 'app-purchase-confirm',
    templateUrl: './purchase-confirm.component.html',
    styleUrls: ['./purchase-confirm.component.scss']
})
export class PurchaseConfirmComponent implements OnInit {
    routerId: string;
    url = window.location.href;
	currentURL: string = '';
    item: Item = { id: null, item_name: '', item_description: '', category: '', qty: null, item_code: '', price: 0 };
    credentials:  { email: string | null, password: string | null } = null;

    TotalAmount: number = 0;

    constructor(
        private route: ActivatedRoute,
        private itemService: ItemService,
        private purchaseService: PurchaseService,
        private trxService: TrxService,
        private emailDataService: EmailDataService
    ) {
        this.route.params.subscribe(params => {
            this.routerId = params['id'];
        });
        this.credentials = this.emailDataService.getCredentials();
        console.log(this.credentials);
    }

    ngOnInit() {
        if(this.credentials.email && this.credentials.password) {
            if(this.routerId) {
                this.trxService.getTrx(this.routerId).subscribe(res => {
                    const trx = res['data'];
                    if(trx) {
                        this.itemService.getItemByItemCode(trx.item_code).subscribe(
                            (response) => {
                                this.item = response['data'];
                                this.calculateTotalAmount();
                            },
                            (error) => {
                                // handle error
                                console.error('Error retrieving category:', error);
                            }
                        );
                    }
                });
            }
        } else {
            window.close();
        }
    }

    calculateTotalAmount() {
        this.TotalAmount = this.item.price * this.item.qty;
    }

    addToOrder() {
        let purchase: any = { id: 0, item_code: this.item.item_code, ordered_by: this.credentials.email, qty: 1, status: 'New', total_amount: this.TotalAmount, trxId: this.routerId };
        this.purchaseService.addPurchase(purchase).subscribe(
            (response) => {
                if(response['message'] === 'Item Out of Stock') {
                    alert(response['message']);
                } else {
                    window.close();
                }
            },
            (error) => {
                console.error('Error saving item:', error);
            }
        );
    }
}