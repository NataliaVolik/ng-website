import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {
  form: FormGroup

  ngOnInit() {
    this.form = new FormGroup({
      address: new FormGroup({
        city: new FormControl('massage'),
        street: new FormControl('', Validators.required)
      }),

    })
  }
}
