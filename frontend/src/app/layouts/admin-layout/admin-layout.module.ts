import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from 'src/app/pages/category/list/category.component';
import { CategoryFormComponent } from 'src/app/pages/category/form/category-form.component';
import { ItemFormComponent } from 'src/app/pages/items/form/item-form.component';
import { CustomerComponent } from 'src/app/pages/customer/list/customer.component';
import { CustomerFormComponent } from 'src/app/pages/customer/form/customer-form.component';
import { ItemQrFormComponent } from 'src/app/pages/items/qr/qr-form.component';
import { QrCodeModule } from 'ng-qrcode';
import { PurchaseComponent } from 'src/app/pages/purchase/list/purchase.component';
import { ItemCategoryComponent } from 'src/app/pages/items/list-category/item-category.component';
import { ItemsComponent } from 'src/app/pages/items/items/items.component';
import { UserProfileComponent } from 'src/app/pages/user-profile/user-profile.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(AdminLayoutRoutes),
		FormsModule,
		HttpClientModule,
		NgbModule,
		ClipboardModule,
		QrCodeModule
	],
	declarations: [
		DashboardComponent,
		CategoryComponent,
		CategoryFormComponent,
		ItemCategoryComponent,
		ItemsComponent,
		ItemFormComponent,
		ItemQrFormComponent,
		IconsComponent,
		CustomerComponent,
		CustomerFormComponent,
		PurchaseComponent,
		UserProfileComponent
	]
})

export class AdminLayoutModule { }
