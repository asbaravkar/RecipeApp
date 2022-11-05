import { CanComponentDeactivate } from './shopping-edit/can-deactivate-guard.service';
import { ShoppingListService } from './shoppinglist.service';
import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, CanComponentDeactivate {
  ingredients: Ingredient[];
  changesSaved:boolean;

  constructor(private shoppingListService:ShoppingListService) { }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if(this.changesSaved != undefined && !this.changesSaved) return confirm('Do you want to discard changes ?');
    else return true;
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.shoppingListService.changesSaved.subscribe(
      (isChangesSaved: boolean) => {
        this.changesSaved = isChangesSaved;
        console.log(isChangesSaved);
      }
    );
  }

  onEditItem(index: number){
    this.shoppingListService.startedEditing.next(index);
  }
}
