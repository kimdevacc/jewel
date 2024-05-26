import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { CategoryComponent } from 'src/app/pages/category/list/category.component';
import { CategoryFormComponent } from 'src/app/pages/category/form/category-form.component';
import { ItemComponent } from 'src/app/pages/items/list/item.component';
import { ItemFormComponent } from 'src/app/pages/items/form/item-form.component';
import { CustomerComponent } from 'src/app/pages/customer/list/customer.component';
import { CustomerFormComponent } from 'src/app/pages/customer/form/customer-form.component';
import { ItemQrFormComponent } from 'src/app/pages/items/qr/qr-form.component';
import { PurchaseComponent } from 'src/app/pages/purchase/list/purchase.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'purchase', component: PurchaseComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'category/form/:id', component: CategoryFormComponent },
    { path: 'item', component: ItemComponent },
    { path: 'item/form/:id', component: ItemFormComponent },
    { path: 'item/qr/:id', component: ItemQrFormComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'customer/form/:id', component: CustomerFormComponent }
];
