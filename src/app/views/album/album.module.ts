import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class AlbumModule { }
