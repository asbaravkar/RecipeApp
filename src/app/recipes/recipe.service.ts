import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes:Recipe[] = [
    new Recipe('Demo Recipe',
               'Demo Description',
               'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Kadai_Paneer_the_Indian_recipe.jpg/1200px-Kadai_Paneer_the_Indian_recipe.jpg?20210320063040',
               [
                new Ingredient('Buns', 2),
                new Ingredient('Patties', 2)
               ])
  ];

  constructor(private slService:ShoppingListService){}

  getRecipes(){
    return this.recipes.slice(); // share copy
  }

  getRecipe(id:number){
    return this.recipes.slice()[id];
  }

  sendItemsToList(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
