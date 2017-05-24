import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

// Load the root stuff
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

// load modules
import { HomeModule } from './modules/home/module'
import { TestModule } from './modules/test/module'
export const modules = [
	HomeModule, TestModule
]


// assemble imports list
export const rootImports = [].concat(BrowserModule, AppRoutingModule, modules)
@NgModule({
	imports: rootImports,
	declarations: [ AppComponent ],
	exports: [ AppRoutingModule ],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	static ModuleIndex: NgModule[] = modules
}
