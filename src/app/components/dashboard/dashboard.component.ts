import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardItem} from "../../models/dashboard-item.model";
import {DashboardItemsService} from "../../services/dashboard-items.service";
import {Subscription} from "rxjs";

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
	dashboardItems: DashboardItem[] = [];
	activeSubs = new Subscription();

	constructor(private dashboardItemsService: DashboardItemsService) {
	}

	ngOnInit(): void {
		this.dashboardItemsService.getDashboardItems().subscribe((items) => {
			this.dashboardItems = items;
		});
		this.activeSubs = this.dashboardItemsService.optionChanged.subscribe(() => {
			this.dashboardItemsService.getDashboardItems().subscribe((items) => {
				this.dashboardItems = items;
			});
		})
	}

	ngOnDestroy(): void {
		this.activeSubs.unsubscribe();
	}
}
