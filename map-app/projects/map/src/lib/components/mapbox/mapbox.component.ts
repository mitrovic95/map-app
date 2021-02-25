import { Component, OnInit } from '@angular/core';
import { MapService } from '../../service/map.service';

@Component({
  selector: 'lib-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.scss']
})
export class MapboxComponent implements OnInit {

  constructor(private map: MapService) { }

  ngOnInit(): void {
    // this.map.buildMap();
  }

  zoomToCenter() {
    this.map.zoomToCenter();
  }
}
