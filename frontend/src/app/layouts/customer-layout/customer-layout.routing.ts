import { Routes } from '@angular/router';
import { PurchaseConfirmComponent } from 'src/app/pages/purchase/confirm/purchase-confirm.component';

export const CustomerLayoutRoutes: Routes = [
    { path: 'purchase/confirm/:id', component: PurchaseConfirmComponent }
];
