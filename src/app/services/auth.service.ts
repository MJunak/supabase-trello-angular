import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@supabase/supabase-js';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser: BehaviorSubject<boolean | User | any> =
    new BehaviorSubject(null);

  constructor(private router: Router, private dataService: DataService) {


    this.dataService.supabase.auth.getUser().then((response) => {
      console.log("my user", response.data.user);

      if (response && response.data.user) {
        this._currentUser.next(response.data.user);
      } else {
        this._currentUser.next(false);
      }

    });

    /*this.dataService.supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        this._currentUser.next(session?.user);
      } else {
        this._currentUser.next(false);
        this.router.navigateByUrl('/', { replaceUrl: true });
      }
    });*/
  }


  async signInWithEmail(email: string, password: string) {
    return await this.dataService.supabase
      .auth
      .signInWithPassword({ email, password })
  }

  logout() {
    this.dataService.supabase.auth.signOut();
  }

  get currentUser() {
    return this._currentUser.asObservable();
  }
}
