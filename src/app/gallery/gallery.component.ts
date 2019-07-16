import { Component, OnInit, OnChanges } from '@angular/core';
import { Image } from 'src/app/image.model';
import {ImageService} from '../image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  
    title="Gallery"
    images: Image[] = [];
    page: number = 1;     

  constructor(private imageService: ImageService) {}

  ngOnInit() {  
    //call api for initial image gallery rendering. gets first three pages  
    while (this.page <= 3){
      this.getImages(); 
      this.page = this.page + 1;   
    }
  }  

  //gets image data from api  
  getImages() {  
    console.log(this.page);  
    this.imageService.getImages(this.page).subscribe((res) => this.onSuccess(res));  
  }  
  
  // when we get data on a success  
  onSuccess(res) {  
    console.log(res);  
    if (res != undefined) {  
      res.forEach(item => {  
        this.images.push(item);  
      });  
    }  
  }  
  
  //when we scroll down this functions gets called 
  onScroll()  
  {  
    console.log("Scrolled");  
    this.page = this.page + 1;  
    this.getImages();  
  }  
}
