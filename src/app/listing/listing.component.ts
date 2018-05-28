import { Component, OnInit } from '@angular/core';
import { GeoLocService } from '../services/geo-loc.service';
import { AircraftService } from '../services/aircraft.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  flights: any[];
  constructor(private geoLoc: GeoLocService, 
    private aircraft: AircraftService, 
    private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(res => {
      let coordinates = {lat: res.params.lat, lon: res.params.lon}
      this.aircraft.getAircrafts(coordinates).subscribe(res => {
        // this.flights = res.acList;
        this.flights = res.acList.sort((a, b) => {
          return (b.Alt > a.Alt) ? 1 : ((b.Alt > a.Alt) ? -1 : 0);
        })

        // objs.sort(function(a,b) {return (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0);} );
        console.log(this.flights);
      })
    })    
  }

  goToFlight(id) {
    this.router.navigate(["/flight", id]);
  }

}
