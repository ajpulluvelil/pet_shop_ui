import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-about-us',
  templateUrl: './public-about-us.component.html',
  styleUrls: ['./public-about-us.component.css']
})
export class PublicAboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('about-us');
  }

}
