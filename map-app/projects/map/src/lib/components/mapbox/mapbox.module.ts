import { NgModule } from '@angular/core';
import { MapboxRoutingModule } from './mapbox-routing.module';
import { MapboxComponent } from './mapbox.component';



@NgModule({
  declarations: [MapboxComponent],
  imports: [
    MapboxRoutingModule
  ],
  exports: [MapboxComponent]
})
export class MapboxModule { }
