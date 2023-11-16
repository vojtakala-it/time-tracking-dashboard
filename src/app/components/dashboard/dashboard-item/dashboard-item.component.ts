import {AfterViewInit, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {DashboardItem, Timeframe} from "../../../models/dashboard-item.model";
import {DashboardItemsService} from "../../../services/dashboard-items.service";

@Component({
	selector: 'app-dashboard-item',
	templateUrl: './dashboard-item.component.html',
	styleUrls: ['./dashboard-item.component.scss'],
})
export class DashboardItemComponent implements OnInit, AfterViewInit {
	@Input() item: DashboardItem;
	iconName: string;
	bgColor: string;
	timeframe: Timeframe;

	constructor(private dashboardItemsService: DashboardItemsService,
				private cdr: ChangeDetectorRef) {
	}

	ngOnInit(): void {
		const option = this.dashboardItemsService.getOption();
		this.timeframe = this.item.timeframes[option];
		this.iconName = this.item.title === 'Self Care' ? 'selfCare' : this.item.title.toLowerCase();
	}

	ngAfterViewInit(): void {
		this.bgColor = this.dashboardItemsService.getColor();
		this.cdr.detectChanges();
	}
}
