import { Component, OnInit } from '@angular/core';
import { FoodservicesService } from '../services/food/foodservices.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  foods:String[] = [];
  constructor(private foodService:FoodservicesService) { }

  ngOnInit(): void{
    this.foods = this.foodService.getAll();
  }
}
