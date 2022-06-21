import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZooAnimalComponent } from './zoo/zoo-animal/zoo-animal.component';
import { ZooComponent } from './zoo/zoo.component';

@NgModule({
  declarations: [
    AppComponent,
    ZooAnimalComponent,
    ZooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
