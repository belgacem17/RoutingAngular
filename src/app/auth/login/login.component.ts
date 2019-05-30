import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  get formControls(): any { return this.loginForm.controls; }
  login() {
    console.log(this.loginForm.controls);
    if (this.loginForm.invalid) {
      return;
    }
    if (this.loginForm.get('email').value === 'admin@gmail.com') {
      this.loginForm.reset();
      this.router.navigateByUrl('/admin');
    }
    if (this.loginForm.get('email').value === 'user@gmail.com') {
      this.loginForm.reset();
      this.router.navigateByUrl('/user');
    }
  }

}
