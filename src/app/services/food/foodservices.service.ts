import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodservicesService {

  constructor() { }

  getAll():String[]{
    return[
      '/assets/images/friedricePic.jpg',
      '/assets/images/ravioliPic (225x225).jpg',
      '/assets/images/steakPic (225x225).jpg',
      '/assets/images/tiramisuPic.jpg',
      '/assets/images/teaPic.jpg',
      '/assets/images/pannacottaPic.jpg',
    ]
  }
}
