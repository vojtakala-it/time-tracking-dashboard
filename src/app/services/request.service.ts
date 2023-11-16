import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {DashboardItem} from "../models/dashboard-item.model";
import {map, Observable, tap} from "rxjs";
import {DashboardItemsService} from "./dashboard-items.service";

@Injectable({
	providedIn: 'root'
})
export class RequestService {
	private dataUrl = '../../assets/data.json';

	constructor(private http: HttpClient,
				private dashboardItemsService: DashboardItemsService) {
	}

	fetchDashboardItems(): Observable<DashboardItem[]> {
		return this.http.get<DashboardItem[]>(this.dataUrl)
			.pipe(
				map(items => {
					return items;
				}),
				tap((items: DashboardItem[]) => {
					this.dashboardItemsService.setItems(items);
				})
			);
	};
}
