import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category, CategoryService} from "../../category.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {
  subs: any;
  category: Category;
  constructor(
    public categoryService : CategoryService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    const params = this.route.snapshot.params; // получаю параметры
    const query = this.route.snapshot.queryParams; // получаю параметры
    // console.log(this.router.url); // просмотреть текущий адрес веб-страницы
    // console.log(window.location); // посмотреть всю информацию об адресах
    // console.log(query);
    // console.log(params);
  }

  ngOnInit(): void {
    this.subs = this.route.params.subscribe((params: any)=> {
      // console.log('Params', params);
      this.category = this.categoryService.getById(+params.id);
      // console.log(this.category);
    });
    setTimeout(()=>{
      // window.location.href = 'http://google.com' //переход на другую страницу
      // window.location.reload() //перезагружает страницу
    }, 5000)
  }
  ngOnDestroy(): void{
    this.subs.unsubscribe();
  }
}
