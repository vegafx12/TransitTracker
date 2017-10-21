import { bindable, autoinject } from 'aurelia-framework';
import { Map, MapOptions, LatLngBounds, Bounds, BoundsExpression, LatLngBoundsExpression, TileLayer } from 'leaflet';

@autoinject
export class TransitMap {

  bounds: LatLngBounds; //-93.603516, 44.749659, -92.92099, 45.233316
  map: Map;
  mapOptions: MapOptions;
  tilelayer: TileLayer;

  constructor() { }

  attached() {
    // Initialize Leaflet Map

    this.map = new Map("transit-map", {
      center: [44.968684, -93.278046],
      zoom: 13
    });

    // -- LAYERS --
    // Mapbox Tile Layer
    
    this.tilelayer = new TileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken: 'pk.eyJ1IjoidmVnYWZ4MTIiLCJhIjoiY2lvd2UwazJyMDFnMXVvbTh2ZmZkbjN4biJ9.t_72kL86NjCkb-EtIZjITw'
    }).addTo(this.map);
  }

}

