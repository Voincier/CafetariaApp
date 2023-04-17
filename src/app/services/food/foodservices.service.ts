import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
@Injectable({
  providedIn: 'root'
})
export class FoodservicesService {
  
  constructor() { }

  getFoodById(id:number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Pineapple Fried Rice',
        price: 65000,
        cookTime: '10-20',
        favorite: false,
        origins: ['Thailand'],
        stars: 4.0,
        imageUrl: 'assets/images/food-1.jpg',
        tags: ['Food', 'Rice'],
      },
      {
        id: 2,
        name: 'Al Fungi Pizza',
        price: 140000,
        cookTime: '15-30',
        favorite: false,
        origins: ['Italy'],
        stars: 4.6,
        imageUrl: 'assets/images/food-2.jpg',
        tags: ['Food', 'Pizza'],
      },
      {
        id: 3,
        name: 'Tenderloin Steak',
        price: 100000,
        cookTime: '10-45',
        favorite: false,
        origins: ['American'],
        stars: 4.5,
        imageUrl: 'assets/images/food-3.jpg',
        tags: ['Food', 'Steak'],
      },
      {
        id: 4,
        name: 'Ice Tea',
        price: 5000,
        cookTime: '1-3',
        favorite: false,
        origins: ['American'],
        stars: 4.0,
        imageUrl: 'assets/images/food-4.jpg',
        tags: ['Drink', 'Tea'],
      },
      {
        id: 5,
        name: 'Panna Cotta',
        price: 55000,
        cookTime: '10-15',
        favorite: false,
        origins: ['Italy'],
        stars : 4.7,
        imageUrl: 'assets/images/food-5.jpg',
        tags: ['Dessert'],
      },
      {
        id: 6,
        name: 'Tiramisu',
        price: 65000,
        cookTime: '1-3',
        favorite: false,
        origins: ['Italy'],
        stars: 4.7,
        imageUrl: 'assets/images/food-6.jpg',
        tags: ['Dessert'],
      },
    ];
  }
}
