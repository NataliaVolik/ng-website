import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category, CategoryService} from "../../category.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  subs: any;
  category: Category;
  constructor(public categoryService : CategoryService, public route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.subs = this.route.params.subscribe((params: any)=> {
      console.log('Params', params);
      this.category = this.categoryService.getById(+params.id);
    })
  }
  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }
}
