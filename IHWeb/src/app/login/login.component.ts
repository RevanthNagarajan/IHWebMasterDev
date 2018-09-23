import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { LoginRequest } from '../requestBundles/login.request';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['../fonts.css','./login.component.css','./login.component.less','../styles/parent.provider.less'],
	providers: [DataService,LoginRequest]
})

export class LoginComponent implements OnInit {

	users$: Object;
	loginResponse : Object;
	loginReq : Object;
	
	constructor(
		private data: DataService,
		private loginRequest : LoginRequest
	) { }

	ngOnInit() {
		this.data.getUsers().subscribe(
			data => this.users$ = data 
		);
	}
	getAuthorisation(loginId,pwd){
		this.loginResponse = {
			loginStatus : false,
			loginMessage : ""
		}
		this.loginReq  = { 
			id : null, 
			pwd : ""
		}
		this.loginReq.id = loginId;
		this.loginReq.pwd = pwd;
		let loginRequest : LoginRequest = this.loginReq;
		this.data.authoriseUser(loginRequest)
		//.map((res: Response) => res.json().response);
		.subscribe(
			message => {
				this.loginResponse.loginStatus = true;
				this.loginResponse.loginMessage = message;
			},
			error => {
				console.log("Error", error);
			}
		)
	}
}
