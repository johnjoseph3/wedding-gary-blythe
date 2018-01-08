import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToRsvp() {
    this.router.navigate(['rsvp']);
  }

}
