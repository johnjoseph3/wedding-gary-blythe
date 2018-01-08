import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: 'confirmed', component: ConfirmedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
