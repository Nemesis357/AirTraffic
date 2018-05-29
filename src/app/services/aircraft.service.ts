import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { HttpClient, HttpHeaders, HttpClientModule, HttpHandler } from '@angular/common/http';
import { GeoLocService } from './geo-loc.service';

@Injectable()
export class AircraftService {
  airUrl = 'http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json';

  constructor(private http: HttpClient) { }

  getAircrafts(coordinates) {
    return this.http.jsonp(this.airUrl + '?lat=' + coordinates.lat + '&lng=' + coordinates.lon + '&fDstL=0&fDstU=100', 'callback')
  }

  getAircraft(id) {
    let url = this.airUrl + '?fIcoQ=' + id;
    return this.http.jsonp(url, 'callback');
  }
}
