import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../services/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(
    public categoryService : CategoryService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  openDetail(id){
    this.router.navigateByUrl(`/service/${id}`);
    // this.router.navigateByUrl(`/service/${id}?name=vase&age=21`);
    // this.router.navigate(['service', id])
  }

}
