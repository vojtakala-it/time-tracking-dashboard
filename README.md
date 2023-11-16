# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

* [Desktop Screenshot](https://drive.google.com/file/d/1iFejPGJRe2qdHGC4xookkaq2D9SOCOpq/view?usp=drive_link)
* [Mobile Screenshot](https://drive.google.com/file/d/1fkJmmU0HQbkf2UgYujF4GBSBQ1a_i9z4/view?usp=sharing)

### Links

- [Solution Deployment](https://time-tracking-dashboard-five-wine.vercel.app/)
- [GitHub - Source Code](https://github.com/vojtakala-it/time-tracking-dashboard)

## My process

I started by analysing the design, since it wasn't a hard challenge I went through it only in my mind.
That helped me to think about what kind of HTML elements I'll be working with.

Afterwards, I thought about what kind of Angular components I'm going to need, how to lay it out.
I then proceeded with creating all the components using angular CLI.

* NOTE:
  * That may not actually be the best way to do it. Another way I was thinking about was to just write all the HTML code first in the index file. Anyway, I decided to create the components first and then I proceeded to write the HTML code.

I wrote all the HTML code, of course separately into each Angular component.
I did some basic styling, so I could see it visually, that helps to keep working on it.
Of course, I could have left that for later on, but it helps me to see something that at least resembles the final design.

So I had the basic CSS Grid working in **dashboard.component.html**, I mixed it with some Flexbox 
in **app-dashboard-user** and **app-dashboard-item**.

At that moment, the app wasn't responsive, but it at least looked somehow. I went to add the functionality with TypeScript.

The biggest problem I have, and what cost me the most time were how to deal with the svg icons.
I'm still pretty new and fresh to Front End, so I don't really know how to handle that in the best way.
I'm also pretty new to Angular, though I do have minor professional experience with Angular.
I decided to create components out of all those svg images. Perhaps, that was an overkill, I don't know, but that's what I went for.

Many problems have arisen with the idea of using the svg icon as components. 
If you take a look into my **components/icons** you can see all the icon components.
Doing it this way was the first time I ever tried it. So I learned a lot and went through a little bit of unknown hell,
where I had no idea how to proceed next.
It took me few hours to come up with the idea of using dynamic component: **dashboard-icon.component.ts**. 
Also, never did that before, but it worked. I could now render dynamically all teh svg icons where I needed, but the problem was with styling.
I wanted to fetch the background color for each svg item dynamically, so I had to do it through service and through that svg component.
After few hours everything worked.
I now had a working Angular app with component communication based on services and few @Input @Output decorators.

After few more final touches, I began working on the responsive design, which was pretty easy. I just set up a media query 
and changed the **grid-template-columns** from **repeat(4, 1fr)** to **grid-template-columns: 1fr**.
Some more padding, margin, font size optimizations and it worked well.

In **dashboard-user.component** I set up a @HostListener to watch for resizing and loading events and call onScreenResize function to modify the <br> in my h1 element. If you know how to handle the texts wrapping better rather than using <br> and then having to get rid of the <br> tag on lower resolution, please let me know.

That's it. If you want to know more, just send me a message, I'll be happy to share more details. Thank you very much for your time!

### Built with

- Semantic HTML5 markup
- SCSS
- Flexbox
- CSS Grid
- [Angular](https://angular.io/) - Web Development Framework

### What I learned

This was supposed to be an easy task, but doing it in Angualr and choosing to use svg icons as components made it into a hell :-D.
But I found a way how to do it in the end.

These are the thing that this project helped me to practice:
* How to handle svg icons as components (though I am not sure if my approach is the best one, please let me know)
* Practice CSS Grid, yeah need that and flexbox too :-).
* Practice how to use SCSS with Angular. I still suffer with the View Encapsulation sometimes.
* Using @HostListener decorators to watch over events.
* Practice how to layout Angular components
* Practice how to communicate between Angular components and how to use dynamic components 
  * -> that was amazing, take a look at the icons component
    * maybe not the best approach how to handle all of that, but it definitely did push me to my maximum and taught me something new.


```ts
// Probably not the best code and best approach but I never did that before
// please let me know if you know how to handle this in a better way

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

// using svg icons ad components and render them dynamically through the dynamic component above
// this gave me a hell and I am not really happy about the code or how I solved the challenge
// please let me know if you know how to work with svg icons in a better way in Angular (also outside of Angular too)
// or how I could improve my code, and working with components

@Component({
	selector: 'app-exercise',
	template: `
		<svg
			style="width: 5rem; height: 4rem;"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="m33.357.579 16.447.426c.33.009.645.144.88.38l9.953 9.953a4.946 4.946 0 0 1 1.451 3.311l.514 12.87c.02.503.433.895.937.894l9.595-.05a4.438 4.438 0 0 1 4.437 4.43v.26c0 1.164-.453 2.259-1.277 3.082a4.334 4.334 0 0 1-3.083 1.277h-15.77c-2.347 0-4.393-2.045-4.393-4.393l-.001-8.405-12.05-.009.01 15.17c.001.426-.21.826-.56 1.067l-18.098 12.41c-1.363.849-2.958 1.033-4.426.537a5.147 5.147 0 0 1-1.994-1.237 5.247 5.247 0 0 1-1.193-1.85c-.875-2.293.074-4.934 2.256-6.277l12.303-8.973.252-11.28-13.556.442a1.291 1.291 0 0 1-.957-.377L2.237 11.439c-1-.999-1.55-2.38-1.513-3.792a5.124 5.124 0 0 1 1.714-3.71c2.042-1.84 5.234-1.688 7.267.345l8.576 8.576 29.444-1.635-2.133-2.133-12.263.347a4.434 4.434 0 0 1-3.294-1.28l-.016-.015a4.409 4.409 0 0 1-1.294-3.307c.08-2.347 2.16-4.255 4.632-4.256Zm33.78 11.774c3.025-3.025 7.945-3.025 10.97 0 3.024 3.025 3.024 7.944 0 10.97-3.025 3.024-7.945 3.024-10.97 0-3.024-3.026-3.025-7.945 0-10.97Z"
				[attr.fill]="color"
				fill-rule="nonzero"/>
		</svg>
	`,
	styles: [`
		:host {
			display: flex;
			justify-content: end;
			margin-right: 1vw ;
			height: 45px;
			overflow: hidden;

			svg {
				position: relative;
				top: -4px;
			}
		}
	`]
})
export class ExerciseComponent implements OnInit {
	color = '#29BA66';

	constructor(private dashboardItemService: DashboardItemsService) {
	}

	ngOnInit(): void {
		this.dashboardItemService.setColor(this.color);
		this.color = this.dashboardItemService.updateIconColor();
	}
}

```

### Continued development

I focus on improving my CSS, HTML, JS and Angular skills.
So I'd like to switch on using Angular or just JS on every challenge.
There is still so much to improve and to learn. I still suck at CSS Grid, flexbox and responsive styling :-D.
I want to get much faster at coding, it takes me too much time.
I want to get better at Angular and get to know more its advanced concepts.

## Author

- [LinkedIn](https://www.linkedin.com/in/vojt%C4%9Bch-kala-43438b215/)
- [Front End Mentor Profile](https://www.frontendmentor.io/profile/vojtakala-it)
- [GitHub](https://github.com/vojtakala-it)
