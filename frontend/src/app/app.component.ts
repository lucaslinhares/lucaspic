import { PhotoService } from './photos/photo/photo.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lucaspic';
  titulo_pagina = 'Lucas Linhares bacana'

  photos: any[] = [];

  constructor(private photoService: PhotoService){
  }

  ngOnInit(): void{
    this.photoService.listFromUser('cavalos').subscribe(photos => this.photos = photos);

  }

}
