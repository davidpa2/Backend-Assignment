import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    public api: ApiService,
    public userService: UserService
  ) {
    api.user.userGetUserGet().subscribe({
      next: user => {
        if (user) {
          userService.user = user;

          api.user.userGetCurrenciesHistoryGet().subscribe({
            next: history => {
              userService.currencyHistory = history;
            }
          });
        }
      },
      error: err => {
        console.log(err);
        
      }
    })
  }
}
