import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerLayoutRoutes } from './customer-layout.routing';
import { PurchaseConfirmComponent } from 'src/app/pages/purchase/confirm/purchase-confirm.component';
import { MineFunctionComponent } from 'src/app/pages/purchase/mine-function/mine-function.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(CustomerLayoutRoutes),
		FormsModule,
		HttpClientModule,
		NgbModule,
		ClipboardModule
	],
	declarations: [
		PurchaseConfirmComponent,
		MineFunctionComponent
	]
})

export class CustomerLayoutModule { }
