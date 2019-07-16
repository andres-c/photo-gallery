import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageComponent } from './image/image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageService } from './image/shared/image.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageComponent,
    GalleryComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    InfiniteScrollModule

  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
