import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({})
  }
  submit(){
    console.log('Form submitted: ', this.form);
  }

}
