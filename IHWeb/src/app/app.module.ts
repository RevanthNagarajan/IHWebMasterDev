import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FoundationComponent } from './foundation/foundation.component';
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [
		AppComponent,
		FoundationComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		AngularFontAwesomeModule,
		// FormsModule,
		// HttpModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
