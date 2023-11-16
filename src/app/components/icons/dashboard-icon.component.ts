import {Component, Input, OnInit, ViewChild, ViewContainerRef} from "@angular/core";
import {EllipsisComponent} from "./ellipsis.component";
import {ExerciseComponent} from "./exercise.component";
import {PlayComponent} from "./play.component";
import {SelfCareComponent} from "./self-care.component";
import {SocialComponent} from "./social.component";
import {StudyComponent} from "./study.component";
import {WorkComponent} from "./work.component";

@Component({
	selector: 'app-dashboard-icon',
	template: `
		<ng-template #dynamicIconComponent></ng-template>
	`,
	styles: []
})
export class DashboardIconComponent implements OnInit {
	@ViewChild('dynamicIconComponent', {read: ViewContainerRef, static: true})
	dynamicIconContainer: ViewContainerRef;

	@Input() name: string = '';

	icons = {
		ellipsis: EllipsisComponent,
		exercise: ExerciseComponent,
		play: PlayComponent,
		selfCare: SelfCareComponent,
		social: SocialComponent,
		study: StudyComponent,
		work: WorkComponent,
	}

	ngOnInit(): void {
		<
			EllipsisComponent |
			ExerciseComponent |
			PlayComponent |
			SelfCareComponent |
			SocialComponent |
			StudyComponent |
			WorkComponent
			>this.dynamicIconContainer.createComponent(this.icons[this.name]).instance;
	}
}
