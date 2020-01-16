import { Injectable } from '@angular/core';
import { MEAT_API } from '../app.api'
@Injectable()
export class TokenService {

  private iss = {
    login: `${MEAT_API}/login`,
    signup: `${MEAT_API}/signup`
  }

  constructor() { }

  handle(token) {
    this.set(token)
    //console.log(this.payload(token))
    console.log(this.isValid())
  }

  set(token) {
    localStorage.setItem('token',token)
  }

  get(){
    return localStorage.getItem('token')
  }

  remove(){
    localStorage.removeItem('token')
  }

  isValid(){
    const token = this.get()
    if (token){
      const payload = this.payload(token)
      if (payload){
      return (<any>Object).values(this.iss).indexOf(payload.iss) > -1 ? true : false
      }
    }
    return false
  }

  payload(token){
    const payload = token.split('.')[1];
    //return token.split('.')[1]
    return this.decode(payload)
  }

  decode(payload){
    return JSON.parse(atob(payload))
  }

  loggedIn(){
    console.log('Bruno Logou')
    return this.isValid()
  }
}
