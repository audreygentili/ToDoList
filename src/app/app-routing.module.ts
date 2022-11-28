import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConsultActiviteComponent } from './consult-activite/consult-activite.component';

const routes: Routes = [{path: '', component: HomeComponent},
                        {path: 'about', component: AboutComponent},
                        {path: 'index2.html', component: HomeComponent},
                        {path: 'consultAct', component: ConsultActiviteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
