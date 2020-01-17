import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  albumId: string;

  ngOnInit() {
    // get album by id
    this.activeRoute.params.subscribe(params => {
      this.albumId = params.id;
    });
  }

}


