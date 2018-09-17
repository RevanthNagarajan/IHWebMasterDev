import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FoundationComponent } from './foundation/foundation.component';

@NgModule({
	declarations: [
		AppComponent,
		FoundationComponent
	],
	imports: [
		BrowserModule,
		// FormsModule,
		// HttpModule,
		AppRoutingModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
