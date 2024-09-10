import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { CategoryComponent } from 'src/app/pages/category/list/category.component';
import { CategoryFormComponent } from 'src/app/pages/category/form/category-form.component';
import { ItemFormComponent } from 'src/app/pages/items/form/item-form.component';
import { CustomerComponent } from 'src/app/pages/customer/list/customer.component';
import { CustomerFormComponent } from 'src/app/pages/customer/form/customer-form.component';
import { ItemQrFormComponent } from 'src/app/pages/items/qr/qr-form.component';
import { PurchaseComponent } from 'src/app/pages/purchase/list/purchase.component';
import { ItemCategoryComponent } from 'src/app/pages/items/list-category/item-category.component';
import { ItemsComponent } from 'src/app/pages/items/items/items.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';
import { LiveSellingComponent } from 'src/app/pages/live-selling/live-selling.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'purchase', component: PurchaseComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'live-selling', component: LiveSellingComponent },
    { path: 'category/form/:id', component: CategoryFormComponent },
    { path: 'item-by-category', component: ItemCategoryComponent },
    { path: 'items/list/:category', component: ItemsComponent },
    { path: 'items/form/:category/:id', component: ItemFormComponent },
    { path: 'items/form/:id', component: ItemFormComponent },
    { path: 'items/qr/:category/:id', component: ItemQrFormComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'customer/form/:id', component: CustomerFormComponent },
    { path: 'profile/form/:id', component: UserProfileComponent }
];
