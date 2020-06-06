import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  // show: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  // hideContent(){
  //   this.show = !this.show;
  //   console.log(this.show);
  // }
}
