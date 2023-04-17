import { Component, OnInit } from '@angular/core';
import { FoodservicesService } from '../services/food/foodservices.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  foods:Food[] = [];
  food!: Food;
  constructor(private foodService:FoodservicesService,
    private route:ActivatedRoute,
    private cartService: CartService,
    private router: Router) { }

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      if (params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else
        this.foods = this.foodService.getAll();
    })
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
