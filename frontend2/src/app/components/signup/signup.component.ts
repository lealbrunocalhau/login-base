import { Component, OnInit } from '@angular/core';
import { JarwisService } from '../../service/jarwis.service';
import { TokenService } from '../../service/token.service';
import { Router } from '@angular/router';
import { AuthService } from "../../service/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form = {
    name: null,
    email: null,
    password: null,
    password_confirmation: null
  }
  
  public error = []

  constructor(
              private Jarwis: JarwisService,
              private Token: TokenService,
              private router: Router,
              private auth: AuthService
              ) { }

  ngOnInit() {
   
  }

  onSubmit(){
    this.Jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    )
  }

  handleResponse(data){
    this.Token.handle(data.access_token)
    this.auth.changeAuthStatus(true)
    this.router.navigateByUrl('/profile')
  }

  handleError(error){
    this.error = error.error.errors
  }
}
