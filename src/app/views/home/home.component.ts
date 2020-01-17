import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  images = ['https://bit.ly/2NvGRFR', 'https://bit.ly/2RradGv', 'https://bit.ly/2TzB1am'];

  ngOnInit() {
  }

}
