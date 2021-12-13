import { AuthenticationService } from './../../service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  error = '';
  returnUrl!: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
    // if (this.authenticationService.currentUserValue) {
    //   if (this.authenticationService.currentUserValue.roles_name === 'Admin_Carpark') {
    //     this.router.navigate((['/human-resource-management-layout']))
    //   } else {
    //     this.router.navigate(['/carpark-operation-admin-layout']);
    //   }
    // }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  get f() { return this.loginForm.controls; }

  login() {
    // console.log(this.loginForm.value); 
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authenticationService.login(this.f['username'].value, this.f['password'].value).pipe(first()).subscribe((data: any) => {
      // console.log('bbbbbbbbbbbbbb');
      console.log(data);
      if(this.returnUrl){
        this.router.navigate([this.returnUrl]);
      }
        // if (this.returnUrl) {
        //   this.router.navigate([this.returnUrl]);
        // } 
        // }, (error: any) => {
        //   this.error = error;
      }
      );
    }
}
