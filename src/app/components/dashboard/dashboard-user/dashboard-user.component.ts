import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {DashboardItemsService} from "../../../services/dashboard-items.service";

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.scss']
})
export class DashboardUserComponent implements OnInit {
	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.onScreenResize();
	}

	profilePicDimension = 234;
	option = 'weekly';
	shouldRenderBr = false;

	constructor(private dashboardItemsService: DashboardItemsService,
				private renderer: Renderer2,
				private el: ElementRef) {
	}

	ngOnInit(): void {
		this.onScreenResize();
	}

	onSetOption(option: string) {
		this.dashboardItemsService.setOption(option);
		this.option = option;
	}

	onScreenResize() {
		const h1El = this.el.nativeElement.querySelector('.flexbox-child-container-a h1');

		if (h1El) {
			if (window.innerWidth <= 850) {
				this.shouldRenderBr = false;
				const h1Content = h1El.innerHTML.replace(/<br>/g, '');
				this.renderer.setProperty(h1El, 'innerHTML', h1Content);
			} else {
				this.shouldRenderBr = true;
				const h1Content = 'Jeremy <br> Robson';
				this.renderer.setProperty(h1El, 'innerHTML', h1Content);
			}
		}
	}
}
