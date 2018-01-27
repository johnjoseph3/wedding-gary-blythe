import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { FormsModule }   from '@angular/forms';
import { GuestsService } from './guests.service';

import {SelectModule} from 'ng2-select';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RsvpComponent } from './rsvp/rsvp.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { HomeComponent } from './home/home.component';
import { TopBannerComponent } from './top-banner/top-banner.component';
import { MapComponent } from './map/map.component';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { RegistryLinksComponent } from './registry-links/registry-links.component';

@NgModule({
  declarations: [
    AppComponent,
    RsvpComponent,
    ConfirmedComponent,
    HomeComponent,
    TopBannerComponent,
    MapComponent,
    AccomodationsComponent,
    RegistryLinksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SelectModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYffEd2_gMAzlNZ5DlPpc8M3w5yLyu43Y'
    })
  ],
  providers: [GuestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
