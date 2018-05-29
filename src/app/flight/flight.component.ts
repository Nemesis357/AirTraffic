import { Component, OnInit } from '@angular/core';
import { AircraftService } from '../services/aircraft.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flight: {};
  
  constructor(private aircraft: AircraftService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.aircraft.getAircraft(this.route.snapshot.params.id).subscribe(res => {
      const data: any = res;
      this.flight = data.acList[0];
    })
  }

}
