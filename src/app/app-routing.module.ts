import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'component', component: ComponentComponent },
  { path: 'template', component: TemplateDrivenFormComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
