import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from 'src/app/pages/category/list/category.component';
import { CategoryFormComponent } from 'src/app/pages/category/form/category-form.component';
import { ItemComponent } from 'src/app/pages/items/list/item.component';
import { ItemFormComponent } from 'src/app/pages/items/form/item-form.component';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(AdminLayoutRoutes),
		FormsModule,
		HttpClientModule,
		NgbModule,
		ClipboardModule
	],
	declarations: [
		DashboardComponent,
		CategoryComponent,
		CategoryFormComponent,
		ItemComponent,
		ItemFormComponent,
		IconsComponent,
		MapsComponent
	]
})

export class AdminLayoutModule { }
