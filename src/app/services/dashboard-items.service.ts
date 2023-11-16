import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DashboardItem} from "../models/dashboard-item.model";
import {Observable, Subject} from "rxjs";

@Injectable({
	providedIn: 'root'
})
export class DashboardItemsService {
	public optionChanged = new Subject<string>();
	private dataUrl = '../../assets/data.json';
	private iconColor = '';
	private darkIconColor = 'hsla(0, 0%, 4%, 0.14)';
	private option = 'weekly';

	constructor(private http: HttpClient) {
	}

	getDashboardItems(): Observable<DashboardItem[]> {
		return this.http.get<DashboardItem[]>(this.dataUrl);
	}

	setColor(color: string) {
		this.iconColor = color;
	}

	getColor() {
		return this.iconColor;
	}

	updateIconColor() {
		return this.darkIconColor;
	}

	setOption(option: string) {
		this.option = option;
		this.optionChanged.next(option);
	}

	getOption() {
		return this.option;
	}
}
