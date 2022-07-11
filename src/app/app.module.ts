import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObserverTestComponent } from './observer-test/observer-test.component';
import { BindingComponent } from './binding/binding.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';



const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contatti', component: ContactComponent },
  {path: 'contact', component: ContactComponent },
  { path: 'observer', component: ObserverTestComponent },
  {path: 'custom', component: CustomValidatorComponent },
  {path: 'binding', component: BindingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ObserverTestComponent,
    BindingComponent,
    CustomValidatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {useHash:true})
    
  ],
  providers: [{provide:APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
