import { Component, OnInit, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() page: string;
  @Input() back: boolean;
  constructor(
    private _location: Location
  ) { }

  pages = [
    {
      name: 'Home',
      url: '/home',
      active: '',
      show: true
    },
    {
      name: 'List',
      url: '/list',
      active: '',
      show: true
    },
    {
      name: 'Favorite',
      url: '/favorite',
      active: '',
      show: true
    },
    {
      name: 'Profile',
      url: '/profile',
      active: '',
      show: true
    },
    {
      name: 'Login',
      url: '/login',
      active: '',
      show: true
    }
  ];

  goback() {
    this._location.back();
  }

  ngOnInit() {
    for (const p of this.pages) {
      if (p.name === this.page) {
        p.active = 'active';
      }
    }
  }

}
