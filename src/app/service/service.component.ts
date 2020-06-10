import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor(public categoryService : CategoryService) { }

  ngOnInit(): void {
  }

}
