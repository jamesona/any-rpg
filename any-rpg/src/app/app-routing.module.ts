import { NgModule, Directive } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const defaultRoute = [{ path: '', redirectTo: 'home', pathMatch: 'full'}]

export const moduleRoutes = [
	// {path:'home', loadChildren: 'app/modules/home/module#HomeModule'},
	// {path:'test', loadChildren: 'app/modules/test/module#TestModule'}
]

export const appRoutes: Routes = [].concat(moduleRoutes, defaultRoute)

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	declarations: [],
	exports: [ RouterModule ]
})
export class AppRoutingModule {
	static routes: Routes = appRoutes
}
