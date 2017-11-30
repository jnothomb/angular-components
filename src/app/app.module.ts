import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router"; // pasted this for routes

import { AppComponent } from "./app.component";

import { PageFoodListComponent } from "./pages/page-food-list/page-food-list.component";
import { FoodListComponent } from "./components/food-list/food-list.component";
import { FoodItemComponent } from "./components/food-item/food-item.component";

import { FoodAddFormComponent } from "./components/food-add-form/food-add-form.component";
import { PageHomeComponent } from "./pages/page-home/page-home.component";
import { PageFoodDetailsComponent } from "./pages/page-food-details/page-food-details.component";

import { FoodService } from "./services/food.service";

// pasted this for routes
const routes: Routes = [
  // saying: from localhost:4200, redirect to localhost:4200/food
  { path: "", component: PageHomeComponent },
  // saying: in path /food, render the component below
  { path: "food", component: PageFoodListComponent },
  { path: "food/:id", component: PageFoodDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageFoodListComponent,
    FoodAddFormComponent,
    FoodListComponent,
    FoodItemComponent,
    PageHomeComponent,
    PageFoodDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // pasted this for routes
    RouterModule.forRoot(routes)
  ],
  providers: [
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
