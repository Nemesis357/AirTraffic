import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ListingComponent } from './listing/listing.component';
import { GeoLocService } from './services/geo-loc.service';
import { AircraftService } from './services/aircraft.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FlightComponent } from './flight/flight.component';
import { FormatPipe } from './pipes/format.pipe';
import { DetailsPipe } from './pipes/details.pipe';


const appRoutes: Routes = [
  {path: 'flight/:id', component: FlightComponent},
  {path: 'listing', component: ListingComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    ListingComponent,
    FlightComponent,
    FormatPipe,
    DetailsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule, ToastModule.forRoot()
  ],
  providers: [
    GeoLocService,
    AircraftService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
