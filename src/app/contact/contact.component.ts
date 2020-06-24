import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl( '', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      text: new FormControl(null, [
        Validators.required,
        Validators.maxLength(256)
      ])
    })
  }
  submit(){
    console.log('Form: ', this.form);
    const formData = {...this.form.value}
    console.log('Form Data: ', formData);
  }

}
