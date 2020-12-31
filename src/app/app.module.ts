import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { MaterialComponent } from './material/material.component';

const routes:Routes = [
  { path: 'hello', component: HelloComponent},
  { path: 'material', component: MaterialComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
