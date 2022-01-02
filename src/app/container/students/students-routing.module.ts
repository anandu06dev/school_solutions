import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { StudentsComponent } from './students.component'

const routes: Routes = [
    { path: '', component: StudentsComponent},
    { path: '/:id', component: StudentsComponent},
    {
        path: '**',
        redirectTo: '',
      },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class StudentsRoutingModule {}