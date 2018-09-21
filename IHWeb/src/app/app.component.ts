import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css','./styles/parent.provider.less','./fonts.css']
})
export class AppComponent {
	currentPath = null;
	constructor(
		private router: Router
	) {}
    ngOnInit() {
		this.process.delay(100).then(any=>{
			this.currentPath = this.router.url;
			console.log("path",this.router.url);
	   });
	}
	process = {
		async delay(ms: number) {
			await new Promise(
				resolve => setTimeout(()=>resolve(), ms)
			).then();
		}
	}
}
