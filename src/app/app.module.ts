import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ImageComponent } from './image/image.component';
import { GalleryComponent } from './gallery/gallery.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
