import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/model/item.model';
import { ItemService } from 'src/app/services/item.service';

@Component({
	selector: 'app-live-selling',
	templateUrl: './live-selling.component.html',
	styleUrls: ['./live-selling.component.scss']
})
export class LiveSellingComponent implements OnInit {

	routerId: string;
	items: Item[] = [];

	socket = new WebSocket('ws://localhost:3000');
	

	constructor(
		private route: ActivatedRoute,
		private itemService: ItemService
	) { 
		this.route.params.subscribe(params => {
            this.routerId = params['id'];
        });
	}

	ngOnInit() {
		this.itemService.getItems().subscribe(response => {
            this.items = response['data'];
        });
	}

	nextItem(value: any) {
		let newVal = {
			item_code: value?.item_code,
			description: `${value?.item_code} - ${value?.item_name}`
		}
		this.socket.send(JSON.stringify({ event: "next-item", message: newVal }));
	}

	generateQrFirstMiner(value: any) {
		
	}
}
