import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PhotoComponent } from './photo.component';



@NgModule({
  declarations: [
    PhotoComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [PhotoComponent]
})
export class PhotosModule { }