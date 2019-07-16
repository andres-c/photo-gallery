import {Injectable} from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Image } from 'src/app/image.model';


@Injectable ()
export class ImageService {
	apiUrl = 'https://jsonplaceholder.typicode.com';

	constructor(private _http: HttpClient){}

	getImages(page: number){
		return this._http.get<Image[]>(this.apiUrl + '/photos' + '?_page=' + page);
	}

	getImageById(id:number){
		// let params = new HttpParams().set('albumId', '2');
		return this._http.get<Image[]>(this.apiUrl + '/photos');
	}
}  

  