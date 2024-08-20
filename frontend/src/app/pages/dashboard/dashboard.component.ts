import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
	chartOptions,
	parseOptions,
	chartExample1,
	chartExample2
} from "../../variables/charts";
import { PurchaseService } from 'src/app/services/purchage.service';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/model/customer.model';
import { Purchase } from 'src/app/model/purchase.model';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	customerList: Customer[] = [];
	purchaseList: Purchase[] = [];

	public datasets: any;
	public data: any;
	public salesChart;
	public clicked: boolean = true;
	public clicked1: boolean = false;

	newUsersCount: number | undefined;
	todayPurchaseCount: number | undefined;
	yesterdayPurchaseCount: number | undefined;
	monthlyPurchaseCounts: number[] = [];

	chartOrders = document.getElementById('chart-orders');

	constructor(
		private purchaseService: PurchaseService,
		private customerService: CustomerService,
	) {
	}

	ngOnInit() {
		this.loadPurchases();
		this.loadCustomers();

		parseOptions(Chart, chartOptions());

		// var chartSales = document.getElementById('chart-sales');

		// this.salesChart = new Chart(chartSales, {
		// 	type: 'line',
		// 	options: chartExample1.options,
		// 	data: this.monthlyPurchaseCounts
		// });
	}

	loadPurchases() {
		this.purchaseService.getPurchases().subscribe(response => {
			if (response) {
				this.purchaseList = response['data'];
				if (this.purchaseList) {
					this.countPurchases();
					this.calculateMonthlyCounts();
				}
			}
		});
	}

	loadCustomers() {
		this.customerService.getCustomers().subscribe(response => {
			if (response) {
				this.customerList = response['data'];
				if (this.customerList) {
					this.countNewUser();
				}
			}
		});
	}

	countNewUser(): void {
		const now = new Date();
		const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
		const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);

		this.newUsersCount = this.customerList.filter(item => {
			const createdAt = new Date(item.created_at);
			return createdAt >= startOfMonth && createdAt <= endOfMonth;
		}).length;
	}

	countPurchases(): void {
		const now = new Date();
		const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		const startOfYesterday = new Date(startOfToday);
		startOfYesterday.setDate(startOfToday.getDate() - 1);
		const endOfYesterday = new Date(startOfYesterday);
		endOfYesterday.setHours(23, 59, 59, 999);

		this.todayPurchaseCount = this.purchaseList.filter(purchase => {
			const createdAt = new Date(purchase.created_at);
			return createdAt >= startOfToday && createdAt <= now;
		}).length;

		this.yesterdayPurchaseCount = this.purchaseList.filter(purchase => {
			const createdAt = new Date(purchase.created_at);
			return createdAt >= startOfYesterday && createdAt <= endOfYesterday;
		}).length;
	}

	calculateMonthlyCounts(): void {
		// Initialize monthlyCounts array with zeros for each month
		const monthlyCounts = Array(12).fill(0);

		this.purchaseList.forEach(purchase => {
			const createdAt = new Date(purchase.created_at);
			if (createdAt.getFullYear() === new Date().getFullYear()) {
				const month = createdAt.getMonth(); // 0-based index for months (0=Jan, 11=Dec)
				monthlyCounts[month]++;
			}
		});
		
		const data = {
			labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			datasets: [
				{
					label: "Sales",
					data: monthlyCounts,
					maxBarThickness: 20
				}
			]
		}
		var chartOrders = document.getElementById('chart-orders');
		new Chart(chartOrders, {
			type: 'bar',
			options: chartExample2.options,
			data: data//chartExample2.data
		});
	}

	public updateOptions() {
		this.salesChart.data.datasets[0].data = this.data;
		this.salesChart.update();
	}

}
