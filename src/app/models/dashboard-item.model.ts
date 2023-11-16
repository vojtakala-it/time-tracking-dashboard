export interface Timeframe {
	current: number;
	previous: number;
}

export class DashboardItem {

	constructor(public title: string,
				public timeframes: {
					daily: Timeframe;
					weekly: Timeframe;
					monthly: Timeframe;
				}) {
	}
}
