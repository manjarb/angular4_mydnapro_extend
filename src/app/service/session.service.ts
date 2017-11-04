import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  saveTokenStorage(auth_token: string) {
    if (auth_token !== '' && auth_token !== null) {
      localStorage.setItem('auth_token', auth_token);
      // localStorage.setItem('user_profile', JSON.stringify(profile));
    }
  }

  logoutUserStorage() {
    localStorage.removeItem('auth_token');
  }

}
