import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeoLocService } from '../services/geo-loc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private geoLoc: GeoLocService) { }

  ngOnInit() {
  }

  goToListing() {
    this.geoLoc.getLocation().subscribe(res => {
      let lat = res.json().lat;
      let lon = res.json().lon;
      this.router.navigate(['/listing'],{queryParams: {lat, lon}})  
    })
    
  }


}
