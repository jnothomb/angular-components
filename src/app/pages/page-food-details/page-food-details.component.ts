import { Component, OnInit } from "@angular/core";
// to activate route for food details, added this to import from angular
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-page-food-details",
  templateUrl: "./page-food-details.component.html",
  styleUrls: ["./page-food-details.component.css"]
})
export class PageFoodDetailsComponent implements OnInit {

  // here we activate the route
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // here we use the route
    this.activatedRoute.params.subscribe((params) => {
      console.log(params.id);
    });

  }
}
