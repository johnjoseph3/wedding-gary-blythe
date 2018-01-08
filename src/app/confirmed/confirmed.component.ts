import { Component, OnInit } from '@angular/core';
import { GuestsService } from '../guests.service';

@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.css']
})
export class ConfirmedComponent implements OnInit {

  constructor(private guestsService: GuestsService) { }
  guests;

  ngOnInit() {
    this.guestsService.getGuests()
    this.guestsService.allGuests.subscribe(guests => this.guests = guests)
  }

}
