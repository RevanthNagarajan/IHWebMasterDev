import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest} from './requestBundles/login.request';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	API_Admin_URL  =  'http://localhost:8080';
	constructor(
		private http: HttpClient,
		private loginRequest : LoginRequest
	) { }

	getUsers() {
		return this.http.get('https://jsonplaceholder.typicode.com/users')
	}
	authoriseUser(loginRequest: LoginRequest) :Observable<LoginRequest>{
		return this.http.post<LoginRequest>(`${this.API_Admin_URL}/user/login`,loginRequest);
	}
}
