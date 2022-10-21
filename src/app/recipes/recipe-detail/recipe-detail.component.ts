import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../recipe.service';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    this.recipeService.sendItemsToList(this.recipe.ingredients);
  }
}
