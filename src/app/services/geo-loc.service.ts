import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GeoLocService {
  geoLocUrl = 'http://ip-api.com/json';
  // geoLocUrl = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCLuDlHHxixtGbbhbI04zuXnL32dxN-9-8';
  myLoc: {};
  // updatedLocation = new EventEmitter();

  // this.myLoc = {
  //   lat: res.json().lat, lon: res.json().lon
  // }


  constructor(private http: Http) { }

  getLocation() {
    return this.http.get(this.geoLocUrl);
  }

}
