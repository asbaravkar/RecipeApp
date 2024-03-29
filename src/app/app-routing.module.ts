import { AuthGuard } from './auth/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { RecipeResolverService } from './recipes/recipe-resolver.service';
import { CanDeactivateGuard } from './shopping-list/shopping-edit/can-deactivate-guard.service';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, canActivate:[AuthGuard], children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent, resolve:[RecipeResolverService] },
    { path: ':id/edit', component: RecipeEditComponent, canDeactivate: [CanDeactivateGuard], resolve:[RecipeResolverService] }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
