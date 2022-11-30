import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: [ './reset-password.component.css' ]
})
export class ResetPasswordComponent implements OnInit{
  resetForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: [null, Validators.required, Validators.email],
    });
  }

  onSubmit() {

  }
}
