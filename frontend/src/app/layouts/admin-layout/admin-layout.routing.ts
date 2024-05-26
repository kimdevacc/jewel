import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { CategoryComponent } from 'src/app/pages/category/list/category.component';
import { CategoryFormComponent } from 'src/app/pages/category/form/category-form.component';
import { ItemComponent } from 'src/app/pages/items/list/item.component';
import { ItemFormComponent } from 'src/app/pages/items/form/item-form.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'category/form/:id', component: CategoryFormComponent },
    { path: 'item', component: ItemComponent },
    { path: 'item/form/:id', component: ItemFormComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent }
];
