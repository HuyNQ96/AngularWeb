import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ComponentComponent } from './component/component.component';
import { OnSalePipe } from './on-sale.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HighLightDirective } from './Directives/high-light.directive';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GetDataJsonComponent } from './get-data-json/get-data-json.component';
import { PostDataJsonComponent } from './post-data-json/post-data-json.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ComponentComponent,
    OnSalePipe,
    PageNotFoundComponent,
    HighLightDirective,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    GetDataJsonComponent,
    PostDataJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
