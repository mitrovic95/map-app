import { MapboxModule } from './../../projects/map/src/lib/components/mapbox/mapbox.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
