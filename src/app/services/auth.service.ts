import { Injectable } from '@angular/core';
import * as firebase  from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
user: Observable<firebase.User>;
  constructor(
    public afAuth: AngularFireAuth,
    public router: Router
  ) { }
  login(email: string, password: string){
    this.afAuth.auth.signInWithEmailAndPassword(email,password).then(
      value => {
        this.router.navigate(['dashbord']);
      }
    ).catch(err =>{
      console.log('wrong',err.message);
      this.router.navigate(['signup']);
    }
    )
  }
  signup(email: string, password: string){
    this.afAuth.auth.createUserWithEmailAndPassword(email,password).then(
      value => {
        console.log('Done it',value);
      }
    ).catch(err =>{
      console.log('wrong',err.message);
    }
    )
  }
  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(['sign-in']);
  }
}
