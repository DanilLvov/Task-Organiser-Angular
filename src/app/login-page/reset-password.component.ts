import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DialogData} from "../Dashboard/Dashboard.component";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordComponent implements OnInit{
  resetForm: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ResetPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    let password = this.auth.resetPassword(this.resetForm.value.email)
    if(password !== 0) {
      alert("this is your new password " + password)
    }
    else alert("That Email doesn't exist")
  }



}
