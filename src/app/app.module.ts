import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { ItemCvComponent } from './item-cv/item-cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    EmbaucheComponent,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
