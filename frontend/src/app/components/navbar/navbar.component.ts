import { Component, OnInit, ElementRef } from '@angular/core';
import { ADMIN_ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/model/item.model';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
	public focus;
	public listTitles: any[];
	public location: Location;
	items: Item[] = [];
	constructor(
		location: Location, 
		private element: ElementRef, 
		private router: Router,
		private itemService: ItemService
	) {
		this.location = location;
	}

	ngOnInit() {
		this.listTitles = ADMIN_ROUTES.filter(listTitle => listTitle);
		this.getNotification();
	}
	getTitle() {
		var titlee = this.location.prepareExternalUrl(this.location.path());
		if (titlee.charAt(0) === '#') {
			titlee = titlee.slice(1);
		}

		for (var item = 0; item < this.listTitles.length; item++) {
			if (this.listTitles[item].path === titlee) {
				return this.listTitles[item].title;
			}
		}
		return 'Dashboard';
	}

	getNotification() {
		this.itemService.getItemsWithLessStock().subscribe(response => {
			this.items = response['data'];
        });
	}

	viewItem(category: string, id: number) {
        this.router.navigate(['admin/items/form', category, id]);
    }
}
