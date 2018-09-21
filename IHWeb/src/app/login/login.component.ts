import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['../fonts.css','./login.component.css','./login.component.less','../styles/parent.provider.less']
})
export class LoginComponent implements OnInit {

	users$: Object;
	
	constructor(private data: DataService) { }

	ngOnInit() {
		this.data.getUsers().subscribe(
			data => this.users$ = data 
		);
	}

}
