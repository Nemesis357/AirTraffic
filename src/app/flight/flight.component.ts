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
  constructor(private aircraft: AircraftService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("Params", this.route.snapshot.params.id);
    this.aircraft.getAircraft(this.route.snapshot.params.id).subscribe(res => {
      console.log("RES: ", res);
      console.log("RES.ACLIST" ,res.acList);
      console.log("RES.ACLIST_1", res.acList[0]);
      this.flight = res.acList[0];
    })
  }

}
