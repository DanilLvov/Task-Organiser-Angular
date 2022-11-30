import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.css' ]
})
export class LoginPageComponent implements OnInit{

  animal: string;
  name: string;

  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    this.loginForm.disable();
    let message: string = this.auth.login(this.loginForm.value);
    if (message === "success") {
      this.router.navigate(['/dashboard'])
    }
    else {
      alert(message);
      this.loginForm.enable();
    }
  }

  /*openDialog(): void {
    const dialogRef = this.dialog.open(ResetPasswordDialog, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }*/
}

/*@Component({
  selector: 'reset-password-dialog',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordDialog {

  constructor(
    public dialogRef: MatDialogRef<ResetPasswordDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}*/
