import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule, HttpHandler } from '@angular/common/http';
import { GeoLocService } from './geo-loc.service';

@Injectable()
export class AircraftService {
  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Authorization':'authkey',
      'userid':'1'
    })
  };
  // airUrl = 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json';
  // airUrl = 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json';
  airUrl = 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json';
  // geoLocUrl = 'http://ip-api.com/json';
  myLoc: {};

  // ?lat=33.433638&lng=-112.008113&fDstL=0&fDstU=100
  // + '?lat=' + this.myLoc.lat + '&lng=' + this.myLoc.lon

  constructor(private http: HttpClient) {
    
  }

  getAircrafts(coordinates) {
    return this.http.jsonp(this.airUrl + '?lat=' + coordinates.lat + '&lng=' + coordinates.lon + '&fDstL=0&fDstU=100', 'callback')
  }

  getAircraft(id) {
    let url = this.airUrl + '?fIcoQ=' + id;
    console.log("Air Service url", url);
    return this.http.jsonp(url, 'callback');
  }
}
