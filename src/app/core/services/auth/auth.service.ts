import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  createUser(email:string,password:string){
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  login(email:string,password:string){
    return this.auth.signInWithEmailAndPassword(email,password)
  }

  logout(){
    return this.auth.signOut();
  }

  /*
    * Si responde null, es que no hay un usuario logueado.
    * Si responde !null, es que hay un usuario logueado
   */
  hasUser(){
    return this.auth.authState;
  }

}
