import { Component, OnInit, ElementRef } from '@angular/core';
import { ADMIN_ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/model/item.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

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

	currentUser: any = null;
	fullName: any = "";

	constructor(
		location: Location, 
		private router: Router,
		private itemService: ItemService,
		private authService: AuthService,
		private userService: UserService
	) {
		this.location = location;
		this.currentUser = localStorage.getItem('currentUser');
	}

	ngOnInit() {
		this.listTitles = ADMIN_ROUTES.filter(listTitle => listTitle);
		this.getNotification();
		this.getCurrentLoggedInUser();
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

	logout() {
        this.authService.logout().subscribe(
            () => {
				this.router.navigate(['login']);
            }
        );
    }

	navigateToProfile() {
		this.router.navigate(['admin/profile/form', this.currentUser]);
	}

	getCurrentLoggedInUser() {
		this.userService.getUserById(this.currentUser).subscribe(
			user => {
				this.fullName = user['data'].first_name + " " + user['data'].last_name;
			}
		);
	}
}
