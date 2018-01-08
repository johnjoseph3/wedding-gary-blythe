import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { GuestsService } from './guests.service';

import {SelectModule} from 'ng2-select';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RsvpComponent } from './rsvp/rsvp.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { HomeComponent } from './home/home.component';
import { TopBannerComponent } from './top-banner/top-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    RsvpComponent,
    ConfirmedComponent,
    HomeComponent,
    TopBannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    SelectModule,
    AppRoutingModule
  ],
  providers: [GuestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
