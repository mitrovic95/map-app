import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from "../../../../../src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map?: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 45.25840059970221;
  lng = 19.75316247558669;
  zoom = 11;
  constructor() {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
  }
  buildMap() {
    var coordinates = document.getElementById('coordinates');
    // var beforeMap = new mapboxgl.Map({
    //   container: 'before',
    //   style: 'mapbox://styles/mapbox/light-v10',
    //   center: [0, 0],
    //   zoom: 0
    // });
 
    // var afterMap = new mapboxgl.Map({
    //   container: 'after',
    //   style: 'mapbox://styles/mapbox/dark-v10',
    //   center: [0, 0],
    //   zoom: 0
    // });
    // var beforeMap = new mapboxgl.Map({
    //   container: 'before',
    //   style: 'mapbox://styles/mapbox/light-v10',
    //   center: [0, 0],
    //   zoom: 0
    //   });
       
    //   var afterMap = new mapboxgl.Map({
    //   container: 'after',
    //   style: 'mapbox://styles/mapbox/dark-v10',
    //   center: [0, 0],
    //   zoom: 0
    //   });
    //   var container = '#comparison-container';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: this.zoom,
      center: [this.lng, this.lat]
    })
    this.map.addControl(new mapboxgl.NavigationControl());

    // var marker = new mapboxgl.Marker(
    //   { 
    //     color: "#FFFFFF",
    //     draggable: true 
    //   }
    // )
    // .setLngLat([45.2671, 19.8335])
    // .addTo(this.map);
    // }

    var data = {
      "type":"FeatureCollection",
      "query":[
         "zeleznicka",
         "7",
         "novi",
         "sad"
      ],
      "features":[
         {
            "id":"address.3367459281327316",
            "type":"Feature",
            "place_type":[
               "address"
            ],
            "relevance":1,
            "properties":{
               "accuracy":"rooftop"
            },
            "text":"Железничка",
            "place_name":"Железничка 7, Novi Sad 21208, South Bačka, Serbia",
            "matching_text":"Zeleznicka",
            "matching_place_name":"Zeleznicka 7, Novi Sad 21208, South Bačka, Serbia",
            "center":[
               19.844865,
               45.22281
            ],
            "geometry":{
               "type":"Point",
               "coordinates":[
                  19.844865,
                  45.22281
               ]
            },
            "address":"7",
            "context":[
               {
                  "id":"postcode.15632382623744550",
                  "text":"21208"
               },
               {
                  "id":"place.6270780346322390",
                  "wikidata":"Q55630",
                  "text":"Novi Sad"
               },
               {
                  "id":"region.10868041610429420",
                  "wikidata":"Q648718",
                  "short_code":"RS-06",
                  "text":"South Bačka"
               },
               {
                  "id":"country.8604936944096850",
                  "wikidata":"Q403",
                  "short_code":"rs",
                  "text":"Serbia"
               }
            ]
         },
         {
            "id":"address.2103453683729526",
            "type":"Feature",
            "place_type":[
               "address"
            ],
            "relevance":1,
            "properties":{
               "accuracy":"rooftop"
            },
            "text":"Железничка",
            "place_name":"Железничка 7, Novi Sad 21101, South Bačka, Serbia",
            "matching_text":"Zeleznicka",
            "matching_place_name":"Zeleznicka 7, Novi Sad 21101, South Bačka, Serbia",
            "center":[
               19.841964,
               45.251023
            ],
            "geometry":{
               "type":"Point",
               "coordinates":[
                  19.841964,
                  45.251023
               ]
            },
            "address":"7",
            "context":[
               {
                  "id":"postcode.8201119075568480",
                  "text":"21101"
               },
               {
                  "id":"place.6270780346322390",
                  "wikidata":"Q55630",
                  "text":"Novi Sad"
               },
               {
                  "id":"region.10868041610429420",
                  "wikidata":"Q648718",
                  "short_code":"RS-06",
                  "text":"South Bačka"
               },
               {
                  "id":"country.8604936944096850",
                  "wikidata":"Q403",
                  "short_code":"rs",
                  "text":"Serbia"
               }
            ]
         },
         {
            "id":"address.4348909375389006",
            "type":"Feature",
            "place_type":[
               "address"
            ],
            "relevance":1,
            "properties":{
               "accuracy":"rooftop"
            },
            "text":"Железничка",
            "place_name":"Железничка 7, Novi Sad 21203, South Bačka, Serbia",
            "matching_text":"Zeleznicka",
            "matching_place_name":"Zeleznicka 7, Novi Sad 21203, South Bačka, Serbia",
            "center":[
               19.751347,
               45.256286
            ],
            "geometry":{
               "type":"Point",
               "coordinates":[
                  19.751347,
                  45.256286
               ]
            },
            "address":"7",
            "context":[
               {
                  "id":"postcode.12354992381345780",
                  "text":"21203"
               },
               {
                  "id":"place.6270780346322390",
                  "wikidata":"Q55630",
                  "text":"Novi Sad"
               },
               {
                  "id":"region.10868041610429420",
                  "wikidata":"Q648718",
                  "short_code":"RS-06",
                  "text":"South Bačka"
               },
               {
                  "id":"country.8604936944096850",
                  "wikidata":"Q403",
                  "short_code":"rs",
                  "text":"Serbia"
               }
            ]
         },
         {
            "id":"address.8030323803368970",
            "type":"Feature",
            "place_type":[
               "address"
            ],
            "relevance":0.703704,
            "properties":{
               "accuracy":"street"
            },
            "text":"Железничка",
            "place_name":"Железничка 2, Novi Sad 21410, South Bačka, Serbia",
            "matching_text":"Zeleznicka",
            "matching_place_name":"Zeleznicka 2, Novi Sad 21410, South Bačka, Serbia",
            "center":[
               19.7018405,
               45.2472491
            ],
            "geometry":{
               "type":"Point",
               "coordinates":[
                  19.7018405,
                  45.2472491
               ]
            },
            "context":[
               {
                  "id":"postcode.9852661472321810",
                  "text":"21410"
               },
               {
                  "id":"place.6270780346322390",
                  "wikidata":"Q55630",
                  "text":"Novi Sad"
               },
               {
                  "id":"region.10868041610429420",
                  "wikidata":"Q648718",
                  "short_code":"RS-06",
                  "text":"South Bačka"
               },
               {
                  "id":"country.8604936944096850",
                  "wikidata":"Q403",
                  "short_code":"rs",
                  "text":"Serbia"
               }
            ]
         },
         {
            "id":"address.756290778194592",
            "type":"Feature",
            "place_type":[
               "address"
            ],
            "relevance":0.688889,
            "properties":{
               "accuracy":"street"
            },
            "text":"Alekse Gavrilovica",
            "place_name":"Alekse Gavrilovica 2, Novi Sad 21211, South Bačka, Serbia",
            "matching_text":"Alekse Gavrilovica",
            "matching_place_name":"Alekse Gavrilovica 2, Novi Sad 21211, South Bačka, Serbia",
            "center":[
               19.7330968,
               45.3587441
            ],
            "geometry":{
               "type":"Point",
               "coordinates":[
                  19.8420830,
                  45.2787441
               ]
            },
            "context":[
               {
                  "id":"postcode.8335192100972840",
                  "text":"21211"
               },
               {
                  "id":"place.6270780346322390",
                  "wikidata":"Q55630",
                  "text":"Novi Sad"
               },
               {
                  "id":"region.10868041610429420",
                  "wikidata":"Q648718",
                  "short_code":"RS-06",
                  "text":"South Bačka"
               },
               {
                  "id":"country.8604936944096850",
                  "wikidata":"Q403",
                  "short_code":"rs",
                  "text":"Serbia"
               }
            ]
         }
      ],
      "attribution":"NOTICE: © 2021 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service (https://www.mapbox.com/about/maps/). This response and the information it contains may not be retained. POI(s) provided by Foursquare."
   };
   let mapTest = this.map;
   var canvas = this.map.getCanvasContainer();
  
   data.features.forEach((marker, i) => {
     
    var el = document.createElement('div');
    el.className = 'marker';
    // const zoomInButton = document.createElement('button');
    // zoomInButton.classList.add('radi');
    // zoomInButton.addEventListener('click', () => {
    //   alert("Clicked");
    // });
    

    var newMarker = new mapboxgl.Marker(el, {draggable: true})
      .setLngLat([marker.geometry.coordinates[0], marker.geometry.coordinates[1]])
      .setPopup(new mapboxgl.Popup({ offset: 25, closeOnClick: true,
        anchor: 'bottom', })
      .setHTML('<h3>' + marker.text + '</h3><p>' + marker.place_name + `</p><button class="zoom-in">zoom in</button><button class="zoom-out">zoom out</button>`))
      .addTo(mapTest);
      
      el.addEventListener(('click'), (e) => {
        setTimeout(() => {
          (document.querySelector('.zoom-in') as HTMLElement)?.addEventListener(('click'), () => {
            mapTest.flyTo({center: [marker.geometry.coordinates[0], marker.geometry.coordinates[1]], zoom: this.zoom += 1 });
          });
          (document.querySelector('.zoom-out') as HTMLElement)?.addEventListener(('click'), () => {
            mapTest.flyTo({center: [marker.geometry.coordinates[0], marker.geometry.coordinates[1]], zoom: this.zoom -= 1 });
          });
        }, 300);
      });

      // el.addEventListener(('click'), () => {
      //   setTimeout(() => {
      //     (document.querySelector('.zoom-out') as HTMLElement)?.addEventListener(('click'), () => {
      //       debugger
      //       mapTest.flyTo({center: [marker.geometry.coordinates[0], marker.geometry.coordinates[1]], zoom: this.zoom-- });
  
      //     });
      //   }, 300);
      // });
      //  newMarker.getPopup().setHTML(`zoomInButton`);
      // console.log("🚀 ~ file: map.service.ts ~ line 316 ~ MapService ~ newMarker.getElement ~ newMarker.getElement()", newMarker.getElement().querySelector('button.zoom-in'))
      // newMarker.getElement().addEventListener('click', () => {
      //   alert("Clicked");
      // });

      function onDragEnd() {
      var lngLat = newMarker.getLngLat();
      console.log("🚀 ~ file: map.service.ts ~ line 316 ~ MapService ~ onDragEnd ~ lngLat", lngLat)
      // TO DO napisi da ovde moze post metoda da ide
      
      // coordinates!.style.display = 'block';
      // coordinates!.innerHTML =
      // 'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
      }
       
      newMarker.on('dragend', onDragEnd);

      // var test = this.zoom;
      // setTimeout(() => {
      //   let zoomInButton = document.getElementById("zoom-in-0");
      //   debugger
      //   zoomInButton!.addEventListener("click", handleClick);
      // }, 1000)

      // function handleClick() {
      //     debugger
      //     setTimeout(() => {
      //       // mapTest.setCenter(newMarker.getLngLat());
      //       // mapTest.setZoom(test + 1);
      //       // removeEventListener("click", handleClick);
      //     }, 2000)
      // }
      // function zoomInMarker() {
      //   newMarker.on('dobleclick', function(e){
      //     debugger
      //     mapTest.setCenter(newMarker.getLngLat());
      //     mapTest.setZoom(test + 1);
      // });

      // document.addEventListener((click) => {

      // });
      // console.log("🚀 ~ file: map.service.ts ~ line 327 ~ MapService ~ data.features.forEach ~ test", test)
      // }

    })

    
  }

  zoomToCenter() {
    this.map?.setZoom(this.zoom);
    this.map?.setCenter([this.lng, this.lat])
    // let mapTest = this.map;
    // let test = this.zoom;

    // debugger
    // let zoomInButton = document.getElementById("zoom-in-1");
    //   if (zoomInButton) zoomInButton?.addEventListener("click", handleClick);

    // function handleClick(e: any) {
    //   console.log("🚀 ~ file: map.service.ts ~ line 370 ~ handleClick ~ e", e)
    //   debugger
    //   // setTimeout(() => {
    //     mapTest?.setCenter(e.lngLat.wrap());
    //     mapTest?.setZoom(test + 1);
    //     removeEventListener("click", handleClick);
    //   // }, 2000)
    // }
  }

    
  



    
}
