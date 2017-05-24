import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { TestComponent } from './component'
import { JordanComponent } from './jordan/component'
import { JamesonComponent } from './jameson/component'

const routes = [
	{path: '', component: TestComponent},
	{path: 'jordan', component: JordanComponent },
	{path: 'jameson', component: JamesonComponent }
]

@NgModule({
	imports: [ RouterModule.forChild(routes), CommonModule ],
	declarations: [TestComponent, JordanComponent, JamesonComponent ]
})
export class TestModule { }
export default { TestModule }
