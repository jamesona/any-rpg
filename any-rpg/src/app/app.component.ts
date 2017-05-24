import { Component } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'

@Component({
	selector: 'app-root',
	template: `<router-outlet></router-outlet>`
})
export class AppComponent {
	title: string
	routes = AppRoutingModule.routes
}
