import { Injectable, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GeoLocService {
  options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0
  };

  constructor(private http: Http) { }

  getLocation() {
    if ("geolocation" in navigator) {
      const obs = new Observable((observer) => {
        let crd;
        navigator.geolocation.getCurrentPosition((pos) => {
            crd = pos.coords;
            observer.next(crd)
            observer.complete()
        }, this.error, this.options)
      })
      return obs;
    } else {
      return new Observable((observer) => {
        observer.next("Error")
        observer.complete()
      })
    }
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
}
