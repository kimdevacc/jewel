import { Routes } from '@angular/router';
import { PurchaseConfirmComponent } from 'src/app/pages/purchase/confirm/purchase-confirm.component';
import { MineFunctionComponent } from 'src/app/pages/purchase/mine-function/mine-function.component';

export const CustomerLayoutRoutes: Routes = [
    { path: 'purchase/mine', component: MineFunctionComponent },
    { path: 'purchase/confirm', component: PurchaseConfirmComponent }
];
