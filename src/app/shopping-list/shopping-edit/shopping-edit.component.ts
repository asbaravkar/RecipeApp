import { ShoppingListService } from './../shoppinglist.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInp: ElementRef;
  @ViewChild('amountInput') amountInp: ElementRef;

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
  }

  onIngredientAdd(){
    const name = this.nameInp.nativeElement.value;
    const amount = this.amountInp.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.slService.addIngredient(newIngredient);
  }
}
