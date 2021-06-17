import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-sit-navigation',
  templateUrl: './public-sit-navigation.component.html',
  styleUrls: ['./public-sit-navigation.component.css']
})
export class PublicSitNavigationComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.homeRoute();
  }

  /** sample routing for login funtion */
  loginAuthentication() {
    this.router.navigate(['/login']);
  }
  /** sample routing for servces */
  servicesRoute() {
    this.router.navigate(['public-sit/services']);
  }
  /** sample routing for contact us */
  contactUsRoute() {
    this.router.navigate(['public-sit/contact-us']);
  }
  /** sample routing for about us */
  aboutUsRoute() {
    this.router.navigate(['public-sit/about-us']);
  }
  /** sample routing for home */
  homeRoute() {
    this.router.navigate(['public-sit/home']);
  }

}
