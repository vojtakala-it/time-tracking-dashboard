import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {DashboardUserComponent} from './components/dashboard/dashboard-user/dashboard-user.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DashboardItemComponent} from './components/dashboard/dashboard-item/dashboard-item.component';
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {EllipsisComponent} from './components/icons/ellipsis.component';
import {ExerciseComponent} from './components/icons/exercise.component';
import {PlayComponent} from './components/icons/play.component';
import {SelfCareComponent} from './components/icons/self-care.component';
import {SocialComponent} from './components/icons/social.component';
import {StudyComponent} from './components/icons/study.component';
import {WorkComponent} from './components/icons/work.component';
import {DashboardIconComponent} from "./components/icons/dashboard-icon.component";

@NgModule({
	declarations: [
		AppComponent,
		DashboardUserComponent,
		DashboardIconComponent,
		DashboardComponent,
		DashboardItemComponent,
		EllipsisComponent,
		ExerciseComponent,
		PlayComponent,
		SelfCareComponent,
		SocialComponent,
		StudyComponent,
		WorkComponent
	],
	imports: [
		BrowserModule,
		NgOptimizedImage,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
