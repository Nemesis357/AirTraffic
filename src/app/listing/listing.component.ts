import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoLocService } from '../services/geo-loc.service';
import { AircraftService } from '../services/aircraft.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit, OnDestroy {
  flights: any[];
  coords: any;
  interval;
  location: {};

  constructor(private geoLoc: GeoLocService, 
    private aircraft: AircraftService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
      this.airInit();
      this.interval = setInterval(() => {
        this.airInit(); 
      }, 60000);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  goToFlight(id) {
    this.router.navigate(["/flight", id]);
  }

  airInit() {
    this.geoLoc.getLocation().subscribe(res => {
      this.coords = res;
      this.aircraft.getAircrafts({lat: this.coords.latitude, lon: this.coords.longitude}).subscribe(res => {
        const data: any = res;
        this.flights = data.acList.sort((a, b) => {
          return b.Alt - a.Alt;
        })
      })
    })
  }

}
