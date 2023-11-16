import {Component} from '@angular/core';

@Component({
	selector: 'app-ellipsis',
	template: `
		<svg
			style="width: 2rem; height: 1rem;"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
				fill="hsl(190, 80%, 90%)"
				fill-rule="evenodd"/>
		</svg>
	`,
	styles: [`
		:host {
			&:hover {
				cursor: pointer;
			}
		}
	`]
})
export class EllipsisComponent {
}
