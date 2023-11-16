import {Component, OnInit} from '@angular/core';
import {DashboardItemsService} from "../../services/dashboard-items.service";

@Component({
	selector: 'app-self-care',
	template: `
		<svg
			style="width: 5rem; height: 4rem;"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M.918 50.848c.114 1.723.232 3.5.346 5.336l.003.038.448 6.038c.06.81.412 1.536.951 2.075.54.54 1.266.892 2.075.952l6.038.447.038.003c12.086.755 21.237 1.231 28.95.484 9.007-.873 15.369-3.445 20.02-8.096 8.413-8.413 8.398-21.609-.034-30.041-3.79-3.79-8.959-6.11-14.31-6.526-.415-5.352-2.736-10.52-6.526-14.31C30.484-1.185 17.288-1.2 8.875 7.214-1.295 17.384-.415 30.697.918 50.848ZM21.36 27.122l6.172 6.173 6.16-6.159 6.172 6.173-6.16 6.158 6.173 6.173-6.158 6.158-6.173-6.172-6.158 6.158-6.173-6.172 6.159-6.159-6.173-6.172 6.16-6.159Z"
				[attr.fill]="color"
				fill-rule="nonzero"/>
		</svg>
	`,
	styles: [`
		:host {
			display: flex;
			justify-content: end;
			margin-right: 1vw;
			height: 45px;
			overflow: hidden;

			svg {
				position: relative;
				top: -10px;
			}
		}
	`]
})
export class SelfCareComponent implements OnInit {
	color = '#E6A532';

	constructor(private dashboardItemService: DashboardItemsService) {
	}

	ngOnInit(): void {
		this.dashboardItemService.setColor(this.color);
		this.color = this.dashboardItemService.updateIconColor();
	}
}

