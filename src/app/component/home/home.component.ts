import { Component } from '@angular/core';

@Component ({
	moduleId : module.id,
	selector : 'home',
	templateUrl : 'home.component.html'
})

export class HomeComponent {
	private homePage : string;
	
	constructor() {
		this.homePage = 'Home Page...';
	}
}