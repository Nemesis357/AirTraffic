import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { GeoLocService } from '../services/geo-loc.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private router: Router,
     private geoLoc: GeoLocService, 
     public toastr: ToastsManager, 
     vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
  }

  goToListing() {
    this.router.navigate(['/listing'])
  }

  popWarning() {
    this.toastr.error('It\'s necessary to allow accass to your location in order to use the app!', 'Warning!');
  }
}
