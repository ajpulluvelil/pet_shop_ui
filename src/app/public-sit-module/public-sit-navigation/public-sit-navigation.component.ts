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
  }

  loginAuthentication() {
    this.router.navigate(['/login']);
  }

}
