import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HomeComponent } from './component'

const routes = [
	{path: '', component: HomeComponent }
]

@NgModule({
	imports: [ RouterModule.forChild(routes), CommonModule ],
	declarations: [ HomeComponent ],
	exports: [],
	providers: []
})
export class HomeModule { }
export default { HomeModule }
