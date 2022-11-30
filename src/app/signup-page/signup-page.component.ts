import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: [ './signup-page.component.css' ]
})
export class SignupPageComponent implements OnInit{
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.min(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  onSubmit() {
    let message = this.auth.register(this.signupForm.value)
    if(message === "success") {
      this.router.navigate(['/login'])
    }
    else alert(message)
  }
}

