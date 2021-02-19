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
    this.map.buildMap()
  }

//var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
// mapboxgl.accessToken = 'pk.eyJ1IjoibWl0cm92aWM5NSIsImEiOiJja2xjd29oY3cwYmo4Mm9uMXRlOHA1emJrIn0.oxW6V9Li351rht2oN-ZdAw';
// var map = new mapboxgl.Map({
// container: 'YOUR_CONTAINER_ELEMENT_ID',
// style: 'mapbox://styles/mapbox/streets-v11'
// });

}
